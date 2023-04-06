import { communityCollection } from "../utils/db";
import { ObjectId } from "mongodb";

export interface Community {
  _id: ObjectId;
  name: string;
  members: ObjectId[];
  posts: ObjectId[];
};