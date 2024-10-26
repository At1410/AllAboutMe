const express = require('express');
const authenticateToken = require('../middleware/auth.middleware');
const router = express.Router();

router.get('/protected-route', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route' });
});

module.exports = router;
