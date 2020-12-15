'use strict';

const express = require('express');
const router = express.Router();
const basicAuth = require('./auth.js');
const Users = require('./usermodel');


router.post('/signup', async (req, res) => {
  try {
    const user = new Users(req.body);
    const record = await user.save(req.body);
    res.status(201).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }
})


router.post('/signin', basicAuth, async (req, res) => {
  res.status(200).json({user:req.body.userinfo});
});