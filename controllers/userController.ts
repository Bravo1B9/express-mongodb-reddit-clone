import { Request, Response } from "express";
import { db } from "../db";
import { UserModal } from "../models/userModel";

const userCollection = db.collection('users');
const postCollection = db.collection('posts');

const addUser = async (req: Request, res: Response) => {
  const newUser: UserModal = req.body;
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
  await postCollection.updateMany({ author: `${currentUsername}` }, { $set: { author: username } });
  res.json({ msg: 'Username updated' });
};

module.exports = { addUser, getUserByUsername, updateUsername };