import { Application, Request, Response } from "express";
import { connectToDatabase } from "./db";
const userRouter = require('./routes/userRouter');

const express = require('express');

const app: Application = express();
const PORT = 3000;

connectToDatabase();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ msg: 'Home Page' });
});

app.use('/api', userRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
