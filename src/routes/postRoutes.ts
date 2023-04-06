import express, { Router } from "express";
import * as PostController from "../controllers/postController";

const router: Router = express.Router();

router.post('/community/:community', PostController.addPost);
router.get('/community/:community', PostController.getPostsByCommunity);

export default router;