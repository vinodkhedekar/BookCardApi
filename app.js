var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var bookCardRouter = require('./routers/book-card-router');

var app = express();

var PORT = 8081;
var HOST_NAME = 'localhost:27017';
var DATABASE_NAME = 'shoppingList';

mongoose.connect('mongodb://' + HOST_NAME + '/' + DATABASE_NAME);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());
app.use('/api', bookCardRouter);

app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
