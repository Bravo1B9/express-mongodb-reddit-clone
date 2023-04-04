import express, { Router } from "express";
import * as UserController from "../controllers/userController";

const router: Router = express.Router();

router.post('/register', UserController.registerUser);

export default router;
