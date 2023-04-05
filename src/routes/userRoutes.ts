import express, { Router } from "express";
import * as UserController from "../controllers/userController";

const router: Router = express.Router();

router.post('/register', UserController.registerUser);
router.get('/', UserController.getUserByUsername);

export default router;
