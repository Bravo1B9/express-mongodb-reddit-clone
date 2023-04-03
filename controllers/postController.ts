import { Request, Response } from "express";
import { db } from "../db";

const postCollection = db.collection('posts');

const addPost = async (req: Request, res: Response) => {
  const newPost = req.body;
  await postCollection.insertOne(newPost);
  res.json({ msg: 'New post added' });
};

const getPostsByUsername = async (req: Request, res: Response) => {
  const username: string = req.body.username;
  const userPosts = await postCollection.find({ author: `${username}` }).toArray();
  res.json({ userPosts: userPosts });
};

module.exports = { addPost, getPostsByUsername };