import express from "express";
import mongoose from "mongoose";

import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

import { PORT, LOCALDB } from "./config.js";
import readingRoutes from "./routes/readingRoutes.js";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());

dotenv.config();

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Welcome to Reading List");
});

app.use("/books", readingRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
