const express = require('express');
const router = express.Router();

const { sendEmail } = require('../controllers/email.controllers.js');
const { verifyEmail } = require('../controllers/auth.controllers.js');

router.post('/sendEmail', sendEmail);
router.get('/verifyEmail', verifyEmail);

module.exports = router;