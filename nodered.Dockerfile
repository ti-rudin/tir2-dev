FROM nodered/node-red:latest
USER root

COPY package.json .
RUN npm install --unsafe-perm --no-update-notifier --no-fund --only=production
RUN npm install @node-red-contrib-themes/midnight-red
#COPY settings.js /data/settings.js
#COPY flows_cred.json /data/flows_cred.json
#COPY flows.json /data/flows.json

RUN npm install node-binance-api

RUN mkdir ./custom
COPY ./custom/ ./usr/src/node-red/custom/

WORKDIR /usr/src/node-red

RUN cd /data
RUN npm install ./usr/src/node-red/custom/


