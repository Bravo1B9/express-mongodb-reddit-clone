import express, { Router } from "express";
import * as CommunityController from "../controllers/communityController";

const router: Router = express.Router();

router.post('/new/:profileId', CommunityController.createCommunity);

export default router;