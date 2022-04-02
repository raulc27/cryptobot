const GDAX = require("gdax");

const express = require('express');
const app = express();
const cors = require('cors');



app.use(cors());
app.use(express.json());

let PORT = process.env.PORT || 3337;

app.listen(PORT);

