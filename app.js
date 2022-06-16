const express = require('express');
const config = require('config');

// if(process.env.NODE_ENV === 'prod') {
//     config = require('./config/config.prod.json');   
// } else{
//     config = require('./config/config.dev.json');
// }

const app = new express();

// console.log(app);
console.log(config.get('port'));
