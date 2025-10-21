import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import dotenv from "dotenv";
import path from "path";
import { Request, Response } from "express";
import NFTRoutes from "./routes/NFTRoute";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];

if (process.env.FRONTEND_URL) {
  allowedOrigins.push(process.env.FRONTEND_URL);
}

  app.use(
    cors({
      origin: allowedOrigins,
    })
  );
    
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/NFTs", NFTRoutes);

app.get("allNFT", (req: Request, res: Response) => {
  res.status(200).json({ status: "UP" });
});

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("MongoDB connected"))
  .catch((err: any) => console.error("Data base error", err));

server.listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`);
});
