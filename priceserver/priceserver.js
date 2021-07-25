const Binance = require("node-binance-api");
const fs = require("fs");
const redis = require("redis");

const client = redis.createClient("//redis:6379");
client.auth("YzRAdGgkFg");

const userid = "d3fmoh2rVoVNgIcpLTFZBE0jHnI2";

const binance = new Binance().options({
    APIKEY: 'm0dqmIilej2JPuK6vTzNGPMSc0N6pCHCCA0L5Jtes15gWIDteQ23mlrqCxJjSXOb',
    APISECRET: 'AI4qXclwJWQcBdkNZdGDAB3wVdiJMEwc9OBp54XxFECGjZRHL96Kcv0siBaPC5Kh',
    'reconnect': false
});

function balance_update(data) {
    console.log("Balance Update");
    for (let obj of data.B) {
        let { a: asset, f: available, l: onOrder } = obj;
        if (available == "0.00000000") continue;
        console.log(asset + "\tavailable: " + available + " (" + onOrder + " on order)");
        client.set("balances" + "-" + userid + ":" + asset + "- available", available, 172800);
        client.set("balances" + "-" + userid + ":" + asset + "- onOrder", onOrderv);
    }
}

function execution_update(data) {
    let { x: executionType, s: symbol, L: price, q: quantity, S: side, o: orderType, i: orderId, X: orderStatus, n: comsa } = data;
    if (executionType == "NEW") {
        if (orderStatus == "REJECTED") {
            console.log("Order Failed! Reason: " + data.r);
        }
        console.log(symbol + " " + side + " " + orderType + " ORDER #" + orderId + " (" + orderStatus + ")");
        console.log("..price: " + price + ", quantity: " + quantity);

    }
    //NEW, CANCELED, REPLACED, REJECTED, TRADE, EXPIRED
    console.log(symbol + "\t" + side + " " + executionType + " " + orderType + " ORDER #" + orderId);
    if (orderStatus == "CANCELED") {
        client.set("orders-status" + "-" + userid + ":" + symbol + ":" + orderId, orderStatus, 'EX', 130);
        client.set("orders-status" + "-" + userid + ":" + symbol + ":" + orderId + "-price", price, 'EX', 130);
    }
    else {
        if (orderStatus == "PARTIALLY_FILLED") {
            client.set("orders-status" + "-" + userid + ":" + symbol + ":" + orderId, orderStatus, 'EX', 3);
        }
        else {
            client.set("orders-status" + "-" + userid + ":" + symbol + ":" + orderId, orderStatus, 'EX', 172800);
            client.set("orders-status" + "-" + userid + ":" + symbol + ":" + orderId + "-price", price, 'EX', 172800);
            client.set("orders-status" + "-" + userid + ":" + symbol + ":" + orderId + "-comsa", comsa, 'EX', 172800);
            console.log(data);
        }
    }
    return;
}

function updatelist() {
    let start = new Date; // засекли время
    let monetlist;
    let monetlistraw = fs.readFileSync("monetlist.json", "utf8");
    monetlist = JSON.parse(monetlistraw);
    if (monetlist) {
        binance.websockets.trades(monetlist, (trades) => {
            let { e: eventType, E: eventTime, s: symbol, p: price, q: quantity, m: maker, a: tradeId } = trades;
            //console.info(symbol+" trade update. price: "+price+", quantity: "+quantity+", maker: "+maker);

            //fileHandler(symbol, price);
            client.set("prices:" + symbol, price);

        });

        binance.websockets.userData(balance_update, execution_update);

        if (((new Date) - start) < 49850) {
            let endpoints = binance.websockets.subscriptions();
            for (let endpoint in endpoints) {
                binance.websockets.terminate(endpoint);
            }
            return;

        }
    }
}
const timerId = setInterval(updatelist, 50000);