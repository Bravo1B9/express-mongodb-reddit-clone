import { Request, Response } from "express";
const database = require('../db');

const userCollection = database.db.collection('users')

const addUser = async (req: Request, res: Response) => {
  const newUser = req.body;
  await userCollection.insertOne(newUser);
  res.json({ userAdded: newUser });
};

module.exports = addUser;