import express, { Router } from "express";
import * as ProfileController from "../controllers/profileController";

const router: Router = express.Router();

router.get('/', ProfileController.getProfileByUsername);

export default router;