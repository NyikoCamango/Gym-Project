const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const mapRoutes = require('express-routes-mapper');
const cors = require('cors');

const config = require('../config');
const dbService = require('./services/db.service');

const environment = process.env.NODE_ENV;

const app = express();
const server = http.Server(app);
const mappedOpenRoutes = mapRoutes(config.publicRoutes, 'api/controllers/');
const DB = dbService(environment, config.migrate).start();

app.use(cors());

app.use(helmet({
    dnsPrefetchControl: false,
    frameguard: false,
    ieNoOpen: false,
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text())

app.use('/public', mappedOpenRoutes);

server.listen(config.port, () => {
    console.log('listenin on port ', config.port)
    if (environment !== 'production' &&
      environment !== 'development' &&
      environment !== 'testing'
    ) {
      console.error(`NODE_ENV is set to ${environment}, but only production and development are valid.`);
      process.exit(1);
    }
    return DB;
});