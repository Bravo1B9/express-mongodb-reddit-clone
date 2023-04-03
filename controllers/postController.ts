import { Request, Response } from "express";
import { db } from "../db";

const postCollection = db.collection('posts');

const addPost = async ( req: Request, res: Response) => {
  const newPost = req.body;
  await postCollection.insertOne(newPost);
  res.json({ msg: 'New post added' });
};

module.exports = { addPost };