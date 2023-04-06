import { postCollection } from "../utils/db";
import { ObjectId } from "mongodb";
import { Comment } from "./commentModel";

export interface Post {
  title: string;
  content: string;
  upvotes: number;
  downvotes:  number;
  community: ObjectId;
  comments: Comment[];
  author: string;
};