import { Request, Response } from "express";
import * as CommunityModel from "../models/communityModel";
import * as ProfileModel from "../models/profileModel";
import { Community } from "../models/communityModel";
import { ObjectId } from "mongodb";

export const createCommunity = async (req: Request, res: Response) => {
  const profileId = req.params.profileId;
  const foundingMember = new ObjectId(req.body.foundingMember);
  const community: Omit<Community, "_id"> = {
    name: req.body.name,
    description: req.body.description,
    members: [foundingMember],
    posts: []
  };
  const newCommunity = await CommunityModel.createCommunity(community);
  await ProfileModel.addCommunity(profileId, newCommunity.insertedId);
  res.status(201).json({ msg: `Community ${req.body.name} successfully created` });
};