import mongoose from "mongoose";

// Connect to MongoDB
const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB Connected...");
  });
  await mongoose.connect(`${process.env.MONGO_DB_URI}/e-promo`);
};

export default connectDB;
