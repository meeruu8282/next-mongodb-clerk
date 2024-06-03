"use server";

import User from "@/lib/modals/user.modal";
import { connect } from "@/lib/db";

export const createUser = async (user: any) => {
  await connect();
  console.log("Attempting to create a new user:", user);
  try {
    const newUser = new User(user);
    await newUser.save();
    console.log("User successfully created:", newUser);
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  }
};