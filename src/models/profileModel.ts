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

export const getProfileById = async (profileId: string) => {
  const profile = await profileCollection.findOne({
    _id: new ObjectId(profileId),
  });
  return profile;
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

export const addCommunity = async (profileId: string, communityId: ObjectId) => {
  await profileCollection.updateOne(
    { _id: new ObjectId(profileId) },
    { $push: { joinedCommunities: communityId } }
  );
};
