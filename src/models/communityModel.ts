import { communityCollection } from "../utils/db";
import { ObjectId } from "mongodb";

export interface Community {
  _id: ObjectId;
  name: string;
  description: string;
  members: ObjectId[];
  posts: ObjectId[];
}

export const createCommunity = async (community: Omit<Community, "_id">) => {
  await communityCollection.insertOne(community);
};
