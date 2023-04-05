import express, { Router } from "express";
import * as UserController from "../controllers/userController";

const router: Router = express.Router();

router.post('/register', UserController.registerUser);
router.get('/username', UserController.getUserByUsername);
router.get('/email', UserController.getUserByEmail);
router.put('/update-username', UserController.updateUsernameById);
router.put('/update-email', UserController.updateUserEmailById);

export default router;
