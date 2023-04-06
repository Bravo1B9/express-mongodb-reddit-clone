import { postCollection } from "../utils/db";
import { ObjectId } from "mongodb";
import { Comment } from "./commentModel";

export interface Post {
  title: string;
  content: string;
  upvotes: number;
  downvotes:  number;
  community: string;
  comments: Comment[];
  author: string;
};

export const addPost = async (post: Post) => {
  await postCollection.insertOne(post);
};

export const getPostsByCommunity = async (community: string) => {
  const posts = await postCollection.find({ community }).toArray();
  return posts;
};

export const getPostById = async (postId: string) => {
  const post = await postCollection.findOne({ _id: new ObjectId(postId) });
  return post;
};