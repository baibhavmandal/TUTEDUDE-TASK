import mongoose from "mongoose";
import logger from "../utils/logger.js";

const URI = process.env.MONGO_URI;

const connectDB = async () => {
  if (!URI) {
    logger.error("MONGO_URI is not defined in the environment variables.");
    process.exit(1);
  }

  try {
    await mongoose.connect(URI);
    logger.info("MongoDB connected successfully");
  } catch (error) {
    logger.error(`Error: ${error.message}\n${error.stack}`);
    process.exit(1);
  }
};

export default connectDB;
