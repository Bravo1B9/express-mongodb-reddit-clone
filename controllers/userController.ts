import { Request, Response } from "express";
import { db } from "../db";

const userCollection = db.collection('users');

const addUser = async (req: Request, res: Response) => {
  const newUser = req.body;
  await userCollection.insertOne(newUser);
  res.json({ msg: 'New user added' });
};

const getUserByUsername = async (req: Request, res: Response) => {
  const username = req.body.username;
  const user = await userCollection.findOne({ username: username });
  res.json({ user });
};

const updateUsername = async (req: Request, res: Response) => {
  const currentUsername = req.body.currentUsername
  const username = req.body.username;
  await userCollection.updateOne({ username: currentUsername }, { $set: { username } });
  res.json({ msg: 'Username updated' });
};

module.exports = { addUser, getUserByUsername, updateUsername };