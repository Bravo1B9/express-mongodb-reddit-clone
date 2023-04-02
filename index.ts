const userRouter = require('./routes/userRoutes');
import { Request, Response } from "express";
const connectToDatabase = require('./db');
const express = require('express');


connectToDatabase();

const PORT = 3000;

const app = express()

app.use('/api', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.json({ msg: 'Hello world' });
})

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
