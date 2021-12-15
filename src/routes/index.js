const express = require('express');

const routes = express.Router();

const { main } = require('../controller/nivelUm');

routes.get('/nivelUm', main)

module.exports = routes;
