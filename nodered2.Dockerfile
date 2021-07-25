FROM nodered/node-red
USER root

RUN npm install --unsafe-perm --no-update-notifier --no-fund
RUN npm install @node-red-contrib-themes/midnight-red

RUN npm install node-binance-api

#RUN mkdir ./custom
#COPY ./custom/ ./usr/src/node-red/custom/
#RUN cd /data
#RUN npm install ./usr/src/node-red/custom/

WORKDIR /usr/src/node-red
