'use strict';

const mongoose = require('mongoose');

// Create a mongoose model
const usersSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// TODO: make this a funciton that happens before save
// req.body.password = await bcrypt.hash(req.body.password, 10);

// TODO make a method for authenticating the hashed pass


const Users = mongoose.model('users', usersSchema);

module.exports = Users;