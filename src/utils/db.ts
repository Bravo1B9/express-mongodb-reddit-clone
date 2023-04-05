import { MongoClient, Db, Collection } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongodbUri = process.env.MONGODB_URI || '';

let cachedDb: Db;
export let userCollection: Collection;
export let profileCollection: Collection;

export const connectToDatabase = async (): Promise<Db> => {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    const client = await MongoClient.connect(mongodbUri);
    const db = client.db();
    cachedDb = db;
    userCollection = db.collection('users');
    await userCollection.createIndex({ 'username': 1 }, { unique: true });
    profileCollection = db.collection('profiles');
    console.log('Connected to database');
  } catch (err) {
    console.error('Failed to connect to the database', err);
    throw err;
  }   

  return cachedDb;
};