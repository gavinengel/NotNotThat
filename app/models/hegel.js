// app/models.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HegelSchema = new Schema({
  subject: String,
  not: String,
  isare: String

});

module.exports = mongoose.model('Hegel', HegelSchema);

