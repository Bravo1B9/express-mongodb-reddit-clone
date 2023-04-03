const userRouter = require('./routes/userRoutes');
import { Request, Response } from "express";
const database = require('./db');
const express = require('express');


database.connectToDatabase();

const PORT = 3000;

const app = express();

app.use(express.json());
app.use('/api', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.json({ msg: 'Hello world' });
})

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
