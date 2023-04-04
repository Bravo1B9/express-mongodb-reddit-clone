import { Request, Response } from "express";
import { userCollection } from "../db";

export const addNewUser = async (req: Request, res: Response) => {
  const newUser = req.body;
  await userCollection.insertOne(newUser);
  res.status(201).json({ msg: 'New user added' });
};
