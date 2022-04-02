const express = require('express');
const Router = express.Router();

const basicRequest = require('./controllers/basic_request');

const routes = Router;

routes.get('/', basicRequest.get);

module.exports = routes;