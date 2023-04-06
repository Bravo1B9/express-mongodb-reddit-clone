import { Request, Response } from "express";
import * as PostModel from "../models/postModel";
import { Post } from "../models/postModel";

export const addPost = async (req: Request, res: Response) => {
  const post: Post = {
    title: req.body.title,
    content: req.body.content,
    upvotes: 1,
    downvotes: 0,
    community: req.params.community,
    comments: [],
    author: req.body.authorId
  };
  await PostModel.addPost(post);
  res.status(201).json({ msg: 'Post added successfully' });
};

export const getPostsByCommunity = async (req: Request, res: Response) => {
  const community = req.params.community;
  const posts = await PostModel.getPostsByCommunity(community);
  res.status(200).json({ posts: posts });
};
