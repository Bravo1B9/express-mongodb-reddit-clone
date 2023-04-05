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
  res.status(200).json({ user: user });
};

export const getUserByEmail = async (req: Request, res: Response) => {
  const email = req.body.email;
  const user = await UserModel.getUserByEmail(email);
  res.status(200).json({ user: user });
};

export const updateUsernameById = async (req: Request, res: Response) => {
  const { userId, newUsername } = req.body;
  await UserModel.upateUsernameById(userId, newUsername);
  res.status(200).json({ msg: `User ${userId} updated with new username ${newUsername}` });
};