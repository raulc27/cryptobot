const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./src/routes');
const logger = require('./src/logger');



app.use(cors());
app.use(express.json());
app.use(routes);
let PORT = process.env.PORT || 3337;

app.listen(PORT);
logger.info("cryptobotrio running healthy and wealthy, by Raul Castro");

