import { Request, Response } from "express";

export const addNewUser = async (req: Request, res: Response) => {
  res.status(201).json({ msg: 'Add a new user' });
};
