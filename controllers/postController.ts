import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { db } from "../db";

const postCollection = db.collection('posts');

export const addPost = async (req: Request, res: Response) => {
  const newPost = req.body;
  await postCollection.insertOne(newPost);
  res.status(201).json({ msg: 'New post added' });
};

export const getPostsByUsername = async (req: Request, res: Response) => {
  const username: string = req.body.username;
  const userPosts = await postCollection.find({ author: `${username}` }).toArray();
  res.json({ userPosts: userPosts });
};

export const updatePostBody = async (req: Request, res: Response) => {
  const postId = req.query.postId;
  const body = req.body.body;
  await postCollection.updateOne({ _id: new ObjectId(`${postId}`) }, { $set: { body } });
  res.json({ msg: `Post for ${postId} updated` });
};