const express = require('express');
const router = express.Router();
const { getAuthors, createAuthor } = require('../controllers/authorcontroller');
router.route('/').get(getAuthors).post(createAuthor);
module.exports = router;