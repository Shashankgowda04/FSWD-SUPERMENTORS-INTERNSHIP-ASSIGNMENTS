const express = require('express');
const router = express.Router();
const { getFolderData } = require('../controllers/folderController');

router.get('/retrieve', getFolderData);

module.exports = router;