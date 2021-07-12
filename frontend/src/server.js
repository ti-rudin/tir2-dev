import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import {guard} from '@beyonk/sapper-rbac';
import routes from './routes';

const {PORT, NODE_ENV} = process.env;
const dev = NODE_ENV === 'development';

function sessionMiddleware(req, res, next) {
  const token = req.cookies['token'];
  const user = token ? jwt.decode(token) : false;
  if (user) {
    req.user = {
      ...user,
      scope: ['authenticated'],
    };
  }

  // merge profile
  let profile = null;
  if (req.cookies['profile']) {
    const encodedProfile = Buffer.from(req.cookies['profile'], 'base64').toString();
    profile = JSON.parse(encodedProfile);
    if (user.id === profile.id) {
      req.user = {...req.user, ...profile};
    }
  }

  next();
}

polka() // You can also use Express
  .use(
    compression({threshold: 0}),
    sirv('static', {dev}),
    cookieParser(),
    sessionMiddleware,
    (req, res, next) => {
      const options = {
        routes,
        deny: () => {
          res.writeHead(302, {Location: '/auth/login'});
          return res.end();
        },
        grant: () => sapper.middleware({
          session: () => ({
            authenticated: !!req.user,
            user: req.user
          })
        })(req, res, next)
      };

      return guard(req.path, req.user, options);
    }
  )
  .listen(PORT, err => {
    if (err) console.log('error', err);
  });
