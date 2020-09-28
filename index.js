'use strict';

require('dotenv').config();

const mongoose = require('mongoose');

const server = require('./lib/server');

mongoose.connect(process.env.MONGODB_URL,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

server.start(process.env.PORT);
