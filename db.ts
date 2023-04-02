const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://Brendon:pass123@cluster0.ucjj1ea.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to database');
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToDatabase;
