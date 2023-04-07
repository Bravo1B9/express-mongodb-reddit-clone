import { Request, Response } from "express";
import * as PostModel from "../models/postModel";
import { Post } from "../models/postModel";
import { Comment } from "../models/commentModel";

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

export const getPostById = async (req: Request, res: Response) => {
  const postId = req.params.postId;
  const post = await PostModel.getPostById(postId);
  res.status(200).json({ post: post });
};

export const addComment = async (req: Request, res: Response) => {
  const postId = req.params.postId;
  const comment: Comment = {
    content: req.body.content,
    upvotes: 1,
    downvotes: 0,
    author: req.body.author
  };
  await PostModel.addComment(postId, comment);
  res.status(200).json({ msg: `New comment for post ${postId} added` });
};

export const upvotePost = async (req: Request, res: Response) => {
  const postId = req.params.postId;
  await PostModel.upvotePost(postId);
  res.status(200).json({ msg: `Post ${postId} upvoted` });
};