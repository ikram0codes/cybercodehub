import mongoose from "mongoose";

let cachedDb = null;

export const dbConnect = async () => {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "CyberCodeHub",
    });
    cachedDb = db;
    return db;
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default dbConnect;
