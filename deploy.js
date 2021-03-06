'use strict';

require('dotenv').load({silent: true});
const client = require('scp2');
const DIR = process.env.DIR;
const credentials = {
  host: process.env.HOST,
  port: process.env.PORT,
  username: process.env.USERNAME,
  password: process.env.PASS,
  path: DIR
};

client.scp('dist/', credentials, (err) => {
  if (err) {
    throw err;
  }
  console.log('DEPLOY COMPLETED');
});
