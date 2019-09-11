const express = require('express');
const carsRouter = require('./cars/carsRouter.js');

const server = express();

server.use(express.json());

server.use('/cars', carsRouter);

module.exports = server;