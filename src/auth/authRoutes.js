'use strict';

const express = require('express');
const router = express.Router();
const basicAuth = require('./basic-auth-middleware');
const Users = require('./usermodel');


router.post('/signup', async (req, res) => {
  try {
    const user = new Users(req.body);
    const record = await user.save(req.body);
    res.status(201).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }
});


router.post('/signin', basicAuth,(req, res) => {
  res.status(200).send(req.user);
});

module.exports = router;