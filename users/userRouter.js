const { getUserById } = require('./users');

const express = require('express');
const router = express.Router();

router.get('/users/:id', getUserById);

module.exports = router;