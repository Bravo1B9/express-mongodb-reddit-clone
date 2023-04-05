import { Request, Response } from "express";
import * as ProfileModel from "../models/profileModel";

export const getProfileByUsername = async (req: Request, res: Response) => {
  const username = req.body.username;
  const profile = await ProfileModel.getProfileByUsername(username);
  res.status(200).json({ profile: profile });
};
