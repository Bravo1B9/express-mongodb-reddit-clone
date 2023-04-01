const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const client = new MongoClient(
  'mongodb+srv://Brendon:pass123@cluster0.ucjj1ea.mongodb.net/?retryWrites=true&w=majority', 
  { useNewUrlParser: true, useUnifiedTopology: true });
const db = client.db('database');
const usersCollection = db.collection('users');
const postsCollection = db.collection('posts');

const connectToDataBase = async() => {
  try {
    await client.connect();
    console.log('Connected to database');
  } catch (err) {
    console.log(err);
  }
};

connectToDataBase();

const registerUser = async (req, res) => {
  const newUser = req.body;
  await usersCollection.insertOne(newUser);
  res.json({ msg: 'New user added' });
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await usersCollection.findOne({ _id: new ObjectId(id) });
  res.json(user);
};

module.exports = { registerUser, getUserById };