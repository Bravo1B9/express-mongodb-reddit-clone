import { userCollection } from "../utils/db";

export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  joinDate: Date;
}

export const registerUser = async (user: Omit<User, "_id">) => {
  await userCollection.insertOne(user);
};

export const getUserByUsername = async (username: string) => {
  const user = await userCollection.findOne({ username });
  return user;
};

export const getUserByEmail = async (email: string) => {
  const user = await userCollection.findOne({ email });
  return user;
};