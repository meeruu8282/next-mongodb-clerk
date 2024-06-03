"use server";

import User from "@/lib/modals/user.modal";
import { connect } from "@/lib/db";

export async function createUser(user: any) {
  try {
    await connect();
    const newUser = await User.create(user);
    return newUser.toObject();
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}