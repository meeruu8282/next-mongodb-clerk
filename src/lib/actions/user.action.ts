"use server";

import User from "@/lib/modals/user.modal";
import { Connect } from "@/lib/db";

export async function createUser(user: any) {
  console.log("Starting user creation process...");
  console.log("User data received:", user);

  try {
    console.log("Connecting to MongoDB...");
    await Connect();
    console.log("Successfully connected to MongoDB.");

    console.log("Creating a new user in the database...");
    const newUser = await User.create(user);
    console.log("User successfully created:", newUser);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error("Error occurred during user creation:", error);
    throw new Error("Error creating user");
  }
}
