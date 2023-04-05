import { Request, Response } from "express";
import * as UserModel from "../models/userModel";
import { User } from "../models/userModel";

export const registerUser = async (req: Request, res: Response) => {
  const newUser: Omit<User, "_id"> = req.body;
  await UserModel.registerUser(newUser);
  res.status(201).json({ msg: 'User successfully registerd' });
};

export const getUserByUsername = async (req: Request, res: Response) => {
  const username = req.body.username;
  const user = await UserModel.getUserByUsername(username);
  res.json({ user: user });
};