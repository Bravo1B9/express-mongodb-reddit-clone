import { userCollection } from "../utils/db";
import { ObjectId } from "mongodb";

export interface User {
  _id: ObjectId;
  username: string;
  email: string;
  password: string;
  joinDate: Date;
}

export const registerUser = async (user: Omit<User, "_id">) => {
  await userCollection.insertOne(user);
};

export const getUserById = async (userId: string) => {
  const user = await userCollection.findOne({ _id: new ObjectId(`${userId}`) });
  return user;
};

export const getUserByUsername = async (username: string) => {
  const user = await userCollection.findOne({ username });
  return user;
};

export const getUserByEmail = async (email: string) => {
  const user = await userCollection.findOne({ email });
  return user;
};

export const upateUsernameById = async (
  objectId: string,
  newUsername: string
) => {
  const username = newUsername;
  await userCollection.updateOne(
    { _id: new ObjectId(`${objectId}`) },
    { $set: { username } }
  );
};

export const updateUserEmailById = async (
  objectId: string,
  newEmail: string
) => {
  const email = newEmail;
  await userCollection.updateOne(
    { _id: new ObjectId(`${objectId}`) },
    { $set: { email } }
  );
};
