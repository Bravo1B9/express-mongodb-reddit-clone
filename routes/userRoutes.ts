const express = require('express');
const router = express.Router();
const users = require('../controllers/userController');

router.post('/users', users.addUser);
router.get('/users', users.getUserByUsername);
router.put('/users', users.updateUsername);

module.exports = router;
