var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookCardSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
}, { collection: 'BookCards' });

module.exports = mongoose.model('BookCard', bookCardSchema);
