const { addPost, getPostsByUserId } = require('./posts');

const express = require('express');
const router = express.Router();

router.post('/posts', addPost);
router.get('/posts/userId', getPostsByUserId);

module.exports = router