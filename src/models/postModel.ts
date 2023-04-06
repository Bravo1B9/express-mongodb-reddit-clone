import { postCollection } from "../utils/db";
import { ObjectId } from "mongodb";

export interface Post {
  title: string;
  content: string;
  upvotes: number;
  downvotes:  number;
  community: ObjectId;
};