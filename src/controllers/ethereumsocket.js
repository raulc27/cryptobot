const GDAX = require("gdax");
const ETH_USD = `ETH-USD`;
const publicClient = new GDAX.PublicClient();
const websocket = new GDAX.WebsocketClient([ETH_USD]);

const websocketCallback = (data) => console.dir(data);

websocket.on('message', websocketCallback)
