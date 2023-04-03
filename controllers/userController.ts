import { Request, Response } from "express";
const database = require('../db');

const userCollection = database.db.collection('users')

const addUser = async (req: Request, res: Response) => {
  const newUser = req.body;
  await userCollection.insertOne(newUser);
  res.json({ userAdded: newUser });
};

const getUserByUsername = async (req: Request, res: Response) => {
  const username = req.body.username;
  const user = await userCollection.findOne({ username: username });
  res.json({ user });
};  

module.exports = { addUser, getUserByUsername };