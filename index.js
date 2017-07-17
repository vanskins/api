const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/api');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api',routes);

app.listen(process.env.port || 5000, function(){
  console.log('server is running brah.....');
});
