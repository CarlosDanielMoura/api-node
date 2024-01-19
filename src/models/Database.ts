import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const { DB_PASS, DB_USER } = process.env;

const connectionString = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.rc8cxkw.mongodb.net/`;
const conectDB = async () => {
  try {
    if (mongoose.connection.readyState != 1) {
      await mongoose.connect(connectionString);
      console.log("Database connected");
    } else {
      console.log("Database already connected");
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default conectDB;
