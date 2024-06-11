import mongoose from 'mongoose';

const MONGODB_URL = 'mongodb+srv://meeru284:2Vey3fB7Dazizrfo@cluster0.p9zffzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your connection string

mongoose.set('debug', true);
mongoose.set('strictQuery', false);


export const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      dbName: "clerk-next14-db",
      bufferCommands: false,
      connectTimeoutMS: 30000,
    });
    console.log("MongoDB connection established.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }

};