import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./config/conn.js";
import userRouter from "./Routes/userRoutes.js";
import projectRoutes from "./Routes/projectRoutes.js";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the uploads folder exists
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Serve static files from the uploads directory
app.use("/uploads", express.static(uploadsDir));

app.get("/", (req, res) => {
  res.send("Welcome to our server again! and again");
});

app.use("/api", userRouter);
app.use("/api", projectRoutes);

ConnectDB();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
