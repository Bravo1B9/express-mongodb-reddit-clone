import express, { Router } from "express";
import * as CommunityController from "../controllers/communityController";

const router: Router = express.Router();

router.post('/', CommunityController.createCommunity);

export default router;