import { Router } from "express";
const users = require('../controllers/userController');

export const router = Router();

router.post('/users', users.addUser);
router.get('/users', users.getUserByUsername);
router.put('/users', users.updateUsername);

module.exports = router;
