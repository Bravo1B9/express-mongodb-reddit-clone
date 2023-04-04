import { Router } from "express";
import { addNewUser } from "../controllers/userController";

const router = Router();

router.post('/users', addNewUser);

module.exports = router;