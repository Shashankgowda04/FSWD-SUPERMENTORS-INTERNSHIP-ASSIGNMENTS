const express = require('express');
const router = express.Router();
const { getBooks, createBook } = require('../controllers/bookcontroller');

router.route('/')
    .get(getBooks)
    .post(createBook);

module.exports = router;