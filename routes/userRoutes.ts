const express = require('express');
const router = express.Router();
const users = require('../controllers/userController');

router.post('/users', users.addUser);
router.get('/users', users.getUserByUsername);

module.exports = router;
