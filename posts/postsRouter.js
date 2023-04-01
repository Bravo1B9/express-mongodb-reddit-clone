const { addPost } = require('./posts');

const express = require('express');
const router = express.Router();

router.post('/posts', addPost);

module.exports = router