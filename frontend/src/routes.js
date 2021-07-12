import {Router} from '@beyonk/sapper-rbac';

const routes = new Router()
  .unrestrict('/auth/*')
  .restrict('.*', ['authenticated'])
  .build();

export default routes;
