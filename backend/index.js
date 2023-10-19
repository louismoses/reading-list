import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import { PORT, LOCALDB } from "./config.js";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Welcome to Reading List");
});

app.post("readinglist", async (req, res) => {
  try {
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

mongoose
  .connect(LOCALDB)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
