import { profileCollection } from "../utils/db";
import { ObjectId } from "mongodb";

export interface Profile {
  _id: ObjectId;
  _userId: ObjectId;
  username: string;
  joinedCommunities: ObjectId[];
  posts: ObjectId[];
}

export const createProfile = async (profile: Omit<Profile, "_id">) => {
  await profileCollection.insertOne(profile);
};

export const getProfileByUsername = async (username: string) => {
  const profile = await profileCollection.findOne({ username: username });
  return profile;
};

export const updateProfileUsername = async (
  currentUsername: string,
  newUsername: string
) => {
  await profileCollection.updateOne(
    { username: `${currentUsername}` },
    { $set: { username: newUsername } }
  );
};
