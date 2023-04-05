import { profileCollection } from "../utils/db";
import { ObjectId } from "mongodb";

export interface Profile {
  _id: ObjectId;
  _userId: ObjectId;
  username: string;
  joinedCommunities: ObjectId[];
  posts: ObjectId[];
};

export const createProfile = async (profile: Omit<Profile, "_id">) => {
  await profileCollection.insertOne(profile);
};