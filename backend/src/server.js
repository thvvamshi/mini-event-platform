import dotenv from "dotenv";
dotenv.config(); // 🔴 MUST BE FIRST LINE

import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";

import { connectDB } from "./config/db.js";
import routes from "./routes/index.js";


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_URL.split("@")[1],
  api_key: process.env.CLOUDINARY_URL.split("//")[1].split(":")[0],
  api_secret: process.env.CLOUDINARY_URL.split(":")[2].split("@")[0],
  secure: true
});

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Backend running on port ${PORT}`)
);
