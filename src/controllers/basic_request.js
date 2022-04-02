const publicClient = new GDAX.PublicClient();

exports.get = async(request,response,next)=>{

    const callback = (error, response, data) => {
        if(error)
            return console.dir(error);
        return data;
    }
   return response = publicClient.getProducts(callback);

}