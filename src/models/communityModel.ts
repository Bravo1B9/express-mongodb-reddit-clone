import { communityCollection } from "../utils/db";
import { ObjectId } from "mongodb";

export interface Community {
  name: string;
  description: string;
  members: ObjectId[];
  posts: ObjectId[];
}

export const createCommunity = async (community: Community) => {
  const newCommunity = await communityCollection.insertOne(community);
  return newCommunity;
};
