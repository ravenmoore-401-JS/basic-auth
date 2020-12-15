'use strict';

// 3rd Party Resources
const express = require('express');

const authRoutes = require('./auth/authRoutes')
// Prepare the express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRoutes);


module.exports = {
  server: app,
  start: port => {
    if(!port){throw new Error('You have Missed the Space Port');}
    app.listen(port, () => {
      console.log(`waking up on ${port}`);
    });
  }};
