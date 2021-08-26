const sellprice = msg.payload;

node.warn("finish ttp on floor " + msg.bot.currentfloor[0]);

let tempfin = Number(Number(msg.bot.finance.quotainorders) - Number(msg.bot.ttp.quantity));

let tempfin2 = Number(Number(msg.bot.finance.basenal) + Number(msg.bot.ttp.quantity * Number(msg.payload)));

msg.bot.finance.quotainorders = tempfin.toFixed(msg.bot.settings.digitprice);
msg.bot.finance.basenal = tempfin2.toFixed(msg.bot.settings.digitq);

if (msg.bot.finance.baseinorders == -0) { msg.bot.finance.baseinorders = 0; }
if (msg.bot.finance.basenal == -0) { msg.bot.finance.basenal = 0; }

let currentfloor = msg.bot.currentfloor;

//обнуление всех этажей со статусом 3

var floors = msg.bot.floors;


let sellprice =

    floors.forEach(function (item, i, floors) {

        if (item[7] == 3) {
            let buyprice = item[10];

            item[7] = 0;
            item[8] = 0;
            item[9] = 0;
            item[10] = 0;
            item[11] = 0;
            item[12] = 0;
            item[13] = 0;
            item[14] = 0;
        }


    });

msg.bot.floors = floors;


let volname = msg.bot.settings.userid + "-bots:" + msg.botname + ":data";
let botdata = {
    "finance": JSON.stringify(msg.bot.finance),
    "floors": JSON.stringify(msg.bot.floors),
    "sales": JSON.stringify(msg.bot.sales)

};

const upd = global.get('setbot_data')(volname, botdata);

upd.then(upd => {

    msg.payload = upd;


    node.status({ fill: "green", shape: "ring", text: start_node_time });

    node.send(msg);

}).catch(error => {


    node.status({ fill: "red", shape: "ring", text: "error" });
    node.error(error);
});