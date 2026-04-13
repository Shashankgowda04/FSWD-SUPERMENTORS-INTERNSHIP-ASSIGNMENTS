const express = require('express');
const router = express.Router();

// Check these 3 lines carefully:
const { signup, login } = require('../controller/authController');
const { protect } = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');

router.post('/signup', signup);
router.post('/login', login);

// PROTECTED ROUTE
router.get('/admin-dashboard', protect, authorize('admin'), (req, res) => {
    res.json({ message: "Welcome Shashank! You have reached the Admin Dashboard." });
});

module.exports = router;