import { ObjectId } from "mongodb";

export interface Comment {
  content: string;
  upvotes: number;
  downvotes: number;
  author: string;
}