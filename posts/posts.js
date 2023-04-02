const req = require('express/lib/request');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const client = new MongoClient(
  'mongodb+srv://Brendon:pass123@cluster0.ucjj1ea.mongodb.net/?retryWrites=true&w=majority', 
  { useNewUrlParser: true, useUnifiedTopology: true });
const db = client.db('database');
const postsCollection = db.collection('posts');

const addPost = async (req, res) => {
  const newPost = req.body;
  await postsCollection.insertOne(newPost);
  res.json({msg: "New post created!"});
};

const getPostsByUserId = async (req, res) => {
  const userId = req.query.userId;
  const postsByUserId = await postsCollection.find({ author: `${userId}` }).toArray();
  res.json(postsByUserId);
};

const getPostsByUsername = async (req, res) => {
  const username = req.body.username;
  const postsByUsername = await postsCollection.find({ username: `${username}` }).toArray();
  res.json(postsByUsername);
};

module.exports = { addPost, getPostsByUserId, getPostsByUsername };