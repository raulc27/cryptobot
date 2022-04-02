const GDAX = require("gdax");
const publicClient = new GDAX.PublicClient();

const callback = (error,response,data) => {
    if(error)
        return console.dir(error);
    return console.dir(data);
}

publicClient.getProductHistoricRates(
    'BTC-USD',
    {granularity:3600},
    callback
);