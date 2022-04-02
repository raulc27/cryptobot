const GDAX = require("gdax");

const publicClient = new GDAX.PublicClient();

exports.get = async(request,response,next)=>{
   try{
    const callback = (error, response, data) => {
        if(error)
            return console.dir(error);
        return data;
    }
   return response.json(publicClient.getProducts(callback));
   }
   catch(_err){
       console.log(_err);
   }

}