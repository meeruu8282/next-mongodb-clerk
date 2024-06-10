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

mongoose.set('debug', true);

// Set strictQuery to false to prepare for Mongoose 7
mongoose.set('strictQuery', false);

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB Cluster');
});

mongoose.connection.on('error', (error) => {
  console.error('Mongoose connection error:', error.message);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

export const connect = async () => {
  console.log("Entering connect function...");
  try {
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
      }).then((conn) => {
        console.log("MongoDB connection established.");
        return conn;
      }).catch((error) => {
        console.error("Error creating MongoDB connection:", error);
        throw error;
      });
      console.log("MongoDB connection promise created.");
    }

    console.log("Awaiting MongoDB connection promise...");
    cached.conn = await cached.promise;
    console.log("Successfully connected to MongoDB.");
    return cached.conn;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB.");
  }
};
