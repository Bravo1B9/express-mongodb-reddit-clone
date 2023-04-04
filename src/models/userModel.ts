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