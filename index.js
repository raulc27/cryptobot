const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./src/routes');



app.use(cors());
app.use(express.json());
app.use(routes);
let PORT = process.env.PORT || 3337;

app.listen(PORT);

