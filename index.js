'use strict';

require('dotenv').config();
const server = require('./src/server');
const mongoose = require('mongoose');

const mongoOptions = {useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(process.env.MONGOOSE_URI, mongoOptions)
  .then(() => {
    server.start(process.env.PORT);
  })

