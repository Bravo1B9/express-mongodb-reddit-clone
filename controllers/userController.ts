import { Request, Response } from "express";
import { userCollection, profileCollection } from "../db";

export const register = async (req: Request, res: Response) => {
  const newUser = req.body;
  await userCollection.insertOne(newUser);
  const newProfile = {
    username: req.body.username,
    communities: [],
    comments: [],
    posts: [],
  };
  await profileCollection.insertOne(newProfile);
  res.status(201).json({ msg: 'New user added' });
};
