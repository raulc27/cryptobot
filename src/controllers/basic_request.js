const logger = require('../logger');
const getprod = require('./getproducts')

exports.get = async(request,response,next)=>{
    
    logger.info("I am at BASIC_REQUEST")
    return response.json(getprod);
}