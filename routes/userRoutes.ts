import { Request, Response } from'express';
const express = require('express');
const router = express.Router();

router.post('/users', (req: Request, res: Response) => {
  res.json({ msg: 'Add new user' });
});

module.exports = router;
