'use strict';

require('dotenv').config();

const express = require('express');

const logger = require('../middleware/logger.js');
const notFound = require('../middleware/404.js');
const serverError = require('../middleware/500.js');
const timeStamp = require('../middleware/timestamp.js');

const app = express();

app.use(express.json());
app.use(logger);
app.use(notFound);
app.use(serverError);
app.use(timeStamp);

////////////// Routs \\\\\\\\\\\\\\\\\\\\\



























module.exports = {
    server: app, 
    start: port => {
        let PORT = port || process.env.port || 3000;
        app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))
    }
};