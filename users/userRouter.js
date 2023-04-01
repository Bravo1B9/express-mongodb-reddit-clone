const { getUserById, registerUser, getUserByUsername } = require('./users');

const express = require('express');
const router = express.Router();

router.post('/register', registerUser);
router.get('/users/:id', getUserById);
router.get('/users', getUserByUsername);

module.exports = router;