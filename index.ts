import { Request, Response } from "express";

const express = require('express');

const PORT = 3000;

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.json({ msg: 'Hello world' });
})

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
