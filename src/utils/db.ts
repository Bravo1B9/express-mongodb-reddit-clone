import { MongoClient, Db } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongodbUri = process.env.MONGODB_URI || '';

let cachedDb: Db;

export const connectToDatabase = async (): Promise<Db> => {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    const client = await MongoClient.connect(mongodbUri);
    const db = client.db();
    cachedDb = db;
    console.log('Connected to database');
  } catch (err) {
    console.error('Failed to connect to the database', err);
    throw err;
  }   

  return cachedDb;
};