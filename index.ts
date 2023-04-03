import { Application, Request, Response } from "express";

const express = require('express');

const app: Application = express();
const PORT = 3000;

const sayHello = (req: Request, res: Response) => {
  res.json({ msg: 'Hello world' });
};

app.get('/', sayHello);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
