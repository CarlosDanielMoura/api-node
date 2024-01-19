import mongoose, { Schema } from "mongoose";

interface IUser {
  name: string;
  email: string;
  password: string;
}

const User = mongoose.model(
  "User",
  new Schema<IUser>(
    {
      name: String,
      email: String,
      password: String,
    },
    { timestamps: true }
  )
);

export default User;
