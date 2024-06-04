import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL!;

interface MongooseConn {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB Cluster');
});

mongoose.connection.on('error', (error) => {
  console.error('Mongoose connection error:', error.message);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

mongoose.set('debug', true);

export const connect = async (): Promise<Mongoose> => {
  if (cached.conn) {
    console.log("Using cached MongoDB connection.");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("Creating new MongoDB connection promise.");
    cached.promise = mongoose.connect(MONGODB_URL, {
      dbName: "clerk-next14-db",
      bufferCommands: false,
      connectTimeoutMS: 30000,
      serverSelectionTimeoutMS: 30000,
    }).catch((error) => {
      console.error("Error creating MongoDB connection:", error);
      throw error;
    });
    console.log("MongoDB connection promise created.");
  }

  try {
    cached.conn = await cached.promise;
    console.log("Successfully connected to MongoDB.");
    return cached.conn;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB.");
  }
};
