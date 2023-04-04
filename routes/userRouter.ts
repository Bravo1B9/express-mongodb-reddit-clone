import { Router } from "express";
import { register } from "../controllers/userController";

const router = Router();

router.post('/users/register', register);

module.exports = router;