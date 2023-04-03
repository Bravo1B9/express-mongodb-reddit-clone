import { Application, Request, Response } from "express";
import { connectToDatabase } from "./db";
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');

const express = require('express');

const app: Application = express();
const PORT = 3000;

connectToDatabase();

const sayHello = (req: Request, res: Response) => {
  res.json({ msg: 'Hello world' });
};

app.use(express.json());

app.get('/', sayHello);
app.use('/api', userRouter, postRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
