const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Note = require('../../models/note');

module.exports = {
  createNote,
};

async function createNote(req, res) {
  try {
    console.log(req.body, 'req.body in controller')
    console.log(req.user._id, 'req.body.user')
    req.body.user = req.user._id;
    const newNote = await Note.create(req.body.note)
    console.log(newNote, 'new note in note ctrl')
  } catch (err) {
    res.status(500).json(err);
  }
}