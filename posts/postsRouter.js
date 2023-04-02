const { addPost, getPostsByUserId, getPostsByUsername } = require('./posts');

const express = require('express');
const router = express.Router();

router.post('/posts', addPost);
router.get('/posts/userId', getPostsByUserId);
router.get('/posts', getPostsByUsername);

module.exports = router