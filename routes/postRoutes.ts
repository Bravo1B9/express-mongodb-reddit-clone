import { Router } from "express";
import { addPost, getPostsByUsername, updatePostBody } from "../controllers/postController";

export const router = Router();

router.post('/posts', addPost);
router.get('/posts', getPostsByUsername);
router.put('/posts', updatePostBody);

module.exports = router;
