import { postCollection } from "../utils/db";
import { ObjectId } from "mongodb";
import { Comment } from "./commentModel";

export interface Post {
  title: string;
  content: string;
  upvotes: number;
  downvotes: number;
  community: string;
  comments: Comment[];
  author: string;
}

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

export const addComment = async (postId: string, comment: Comment) => {
  await postCollection.updateOne(
    { _id: new ObjectId(postId) },
    { $push: { comments: comment } }
  );
};

export const upvotePost = async (postId: string) => {
  const post = await postCollection.findOne({ _id: new ObjectId(postId) });
  const numUpvotes = post?.upvotes;
  const numDownvotes = post?.downvotes;
  const newUpvotesVal = numUpvotes + 1;
  const newDownvotesVal = numDownvotes - 1;
  await postCollection.updateOne(
    { _id: new ObjectId(postId) },
    { $set: { upvotes: newUpvotesVal, downvotes: newDownvotesVal } }
  );
};

export const downvotePost = async (postId: string) => {
  const post = await postCollection.findOne({ _id: new ObjectId(postId) });
  const numDownvotes = post?.downvotes;
  const numUpvotes = post?.upvotes;
  const newDownvotesVal = numDownvotes + 1;
  const newUpvotesVal = numUpvotes - 1;
  await postCollection.updateOne(
    { _id: new ObjectId(postId) },
    { $set: { downvotes: newDownvotesVal, upvotes: newUpvotesVal } }
  );
};
