'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const Users = require('./usermodel');

module.exports = async(request, response ,next) => {
  if (request.headers.authorization){
    let basicHeaderParts = request.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
    let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
    let decodedString = base64.decode(encodedString); // "username:password"
    let [username, password] = decodedString.split(':'); // username, password 
    try {
      const user = await Users.findOne({ username: username });
      const valid = await bcrypt.compare(password, user.password);
      if (valid) {
        request.headers.userinfo=[username,password];
      }
      else {
        throw new Error('Invalid User');

      }
    } catch (error) { response.status(403).send("Invalid Login"); }  
  }
};


