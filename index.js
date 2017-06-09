'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  caCrt: fs.readFileSync(path.join(__dirname, './ca-crt.pem')),
  client1Crt: fs.readFileSync(path.join(__dirname, './client1-crt.pem')),
  client1Key: fs.readFileSync(path.join(__dirname, './client1-key.pem')),
  client2Crt: fs.readFileSync(path.join(__dirname, './client2-crt.pem')),
  client2Key: fs.readFileSync(path.join(__dirname, './client2-key.pem')),
  serverCrt: fs.readFileSync(path.join(__dirname, './server-crt.pem')),
  serverKey: fs.readFileSync(path.join(__dirname, './server-key.pem'))
}
