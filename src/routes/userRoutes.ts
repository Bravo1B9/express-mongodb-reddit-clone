import express, { Router } from "express";
import * as UserController from "../controllers/userController";

const router: Router = express.Router();

router.post('/register', UserController.registerUser);
router.get('/username', UserController.getUserByUsername);
router.get('/email', UserController.getUserByEmail);
router.put('/user', UserController.updateUsernameById);

export default router;
