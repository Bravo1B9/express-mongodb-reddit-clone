const { getUserById, registerUser } = require('./users');

const express = require('express');
const router = express.Router();

router.post('/register', registerUser);
router.get('/users/:id', getUserById);

module.exports = router;