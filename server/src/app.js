import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// import routes

import accounthandle from "./routes/accounts.route.js";

// routes

app.use("/api/v1", accounthandle);

export { app };
