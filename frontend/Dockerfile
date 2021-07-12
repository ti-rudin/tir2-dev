FROM node:alpine
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install -g npm@7.0.5 --silent
RUN npm i --silent && npm run build

ENV HOST 0.0.0.0
EXPOSE 3000
CMD ["npm", "start"]
