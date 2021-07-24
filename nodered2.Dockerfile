FROM nodered/node-red
USER root

#COPY package.json .
RUN npm install --unsafe-perm --no-update-notifier --no-fund
#RUN npm install --unsafe-perm node-red
#COPY settings.js /data/settings.js
#COPY flows_cred.json /data/flows_cred.json
#COPY flows.json /data/flows.json

RUN npm install node-binance-api

#RUN mkdir ./custom
#COPY ./custom/ ./usr/src/node-red/custom/

WORKDIR /usr/src/node-red

#RUN node node_modules/node-red/red.js


#CMD ["npm", "run", "start"]
#RUN cd /data
#RUN npm install ./usr/src/node-red/custom/


