import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

console.log("User schema created:", UserSchema);

if (models?.User) {
  console.log("Using existing User model");
} else {
  console.log("Creating new User model");
}

const User = models?.User || model("User", UserSchema);

console.log("User model ready:", User);

export default User;