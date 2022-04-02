const GDAX = require("gdax");
const logger = require('../logger');

async function getproducts(){
 try{
    const publicClient = new GDAX.PublicClient();
    const resp = await publicClient.getProducts();
    return resp;
}
 catch(_err){
     logger.error(_err);
 }
}


module.exports = getproducts();