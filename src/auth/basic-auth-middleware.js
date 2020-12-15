'use strict';

const base64 = require('base-64');
const Users = require('./usermodel');

module.exports = async(request, response ,next) => {
  let basicHeaderParts = request.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
  let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
  let decodedString = base64.decode(encodedString); // "username:password"
  let [username, password] = decodedString.split(':'); // username, password 
  try {
    request.user = await Users.authenticateBasic(username,password);
  } catch (error) { response.status(403).send('Invalid Login'); }  
  next();
};


