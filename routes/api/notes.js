const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');


// POST /api/notes
router.post('/', notesCtrl.createNote);

module.exports = router;