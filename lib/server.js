'use strict';

require('dotenv').config();


const express = require('express');
const cors = require('cors');
const notFound = require('../middleware/404.js');
const serverError = require('../middleware/500.js');
const logger = require('../middleware/logger.js');
const timestamp = require('../middleware/timestamp.js');
const router = require('../routes/api-v1.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use(timestamp);
app.use(logger);
app.use('/api/v1', router);
app.use('*', timestamp, notFound, logger);
app.use(serverError)


/////////////////Exports \\\\\\\\\\\\\\
module.exports = {
  server: app,
  start: (port) => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`listening on  PORT :${PORT}`));
  },
};

























module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.port || 3000;
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
  }
};
