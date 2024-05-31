"use server";

import User from "@/lib/modals/user.modal";
import { connect } from "@/lib/db";

export async function createUser(user: any) {
  try {
    const connection = await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error("Error creating user:", error); // Improved error logging
    throw error; // Re-throw error to propagate it back
  }
}
