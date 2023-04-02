import { Request, Response } from "express";

exports.addUser = async (req: Request, res: Response) => {
  res.status(201).json({ msg: 'New user added' });
};