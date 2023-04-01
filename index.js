const express = require('express');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postsRouter');

const app = express();
const PORT = 3000

app.use(express.json());
app.use('/api', userRouter, postRouter);

// app.post('/register', async (req, res) => {
//   const newUser = req.body;
//   await usersCollection.insertOne(newUser);
//   res.json({ msg: 'New user added' });
// });

// app.get('/users/:id', async (req, res) => {
//   const id = req.params.id;
//   const user = await usersCollection.findOne({ _id: new ObjectId(id) });
//   res.json(user);
// });

// app.get('/users', async (req, res) => {
//   const username = req.body.username;
//   const user = await usersCollection.findOne({ username });
//   res.json(user);
// });

// app.put('/users/:id', async (req, res) => {
//   const id = req.params.id
//   const username = req.body.username;
//   await usersCollection.updateOne({ _id: new ObjectId(id) }, { $set: { username } });
//   res.json({ msg: "User updated" });
// });

// app.post('/posts', async (req, res) => {
//   const newPost = req.body;
//   await postsCollection.insertOne(newPost);
//   res.json({msg: "New post created!"});
// });

// app.get('/posts/userId', async (req, res) => {
//   const userId = req.query.userId;
//   const postsByUserId = await postsCollection.find({ author: `${userId}` }).toArray();
//   res.json(postsByUserId);
// });

// app.get('/posts/username', async (req, res) => {
//   const username = req.body.username;
//   const postsByUsername = await postsCollection.find({ username: `${username}` }).toArray();
//   res.json(postsByUsername);
// });

app.listen(PORT, () => {
  console.log('App listening on port 3000');
});