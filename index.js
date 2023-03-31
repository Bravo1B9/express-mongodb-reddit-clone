const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const app = express();
const PORT = 3000

app.use(express.json());

const client = new MongoClient(
  'mongodb+srv://Brendon:pass123@cluster0.ucjj1ea.mongodb.net/?retryWrites=true&w=majority', 
  { useNewUrlParser: true, useUnifiedTopology: true });
const db = client.db('database');
const usersCollection = db.collection('Users');

const connectToDataBase = async() => {
  try {
    await client.connect();
    console.log('Connected to database');
  } catch (err) {
    console.log(err);
  }
};

connectToDataBase();

app.post('/register', async (req, res) => {
  const newUser = req.body;
  await usersCollection.insertOne(newUser);
  res.json({ msg: 'New user added' });
});

app.get('/users/:id', async (req, res) => {
  const id = req.params.id;
  const user = await usersCollection.findOne({ _id: new ObjectId(id) });
  res.json(user);
});

app.get('/users', async (req, res) => {
  const username = req.body.username;
  const user = await usersCollection.findOne({ username });
  res.json(user);
});

app.put('/users/:id', async (req, res) => {
  const id = req.params.id
  const username = req.body.username;
  await usersCollection.updateOne({ _id: new ObjectId(id) }, { $set: { username } });
  res.json({ msg: "User updated" });
});

app.listen(PORT, () => {
  console.log('App listening on port 3000');
});