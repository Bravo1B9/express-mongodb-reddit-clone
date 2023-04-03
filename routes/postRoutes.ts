import { Router } from "express";
const posts = require('../controllers/postController');

export const router = Router();

router.post('/posts', posts.addPost);
router.get('/posts', posts.getPostsByUsername);

module.exports = router;
