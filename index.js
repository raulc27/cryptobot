const GDAX = require("gdax");
const publicClient = new GDAX.PublicClient();
const express = requires('express');
const app = express();
const cors = require('cors');

const callback = (error, response, data) => {
    if(error)
        return console.dir(error);
    return data;
}

app.use(cors());
app.use(express.json());

let PORT = process.env.PORT || 3337;

app.listen(port);

publicClient.getProducts(callback);