import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";  
import Book_R from "./Route/book.route.js";
import User_R from "./Route/user.route.js"

dotenv.config();
const app = express();

// ✅ Enable CORS
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use("/books", Book_R);
app.use("/user",User_R)

// MongoDB connection
const PORT = process.env.PORT || 4001;
const URL = process.env.MongoDB_URL || "mongodb://localhost:27017/bookstore";

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};

connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
