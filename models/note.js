const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const notesSchema = new Schema({
  content: String
});

module.exports = mongoose.model('Note', notesSchema)