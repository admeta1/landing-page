import express from "express";
import userRoutes from "./routes/user.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

import cors from "cors";

export const app = express();
app.use(cors({origin:'*'}))

config({
  path: "./database/config.env",
});
//using middlewares



app.use(express.json());
app.use(cookieParser());



app.use((req, res, next) => {
  const origin = req.get("Origin");
  if (origin) {
    // console.log(`Access from origin: ${origin}`);
  }
  next();
});
//using routes
app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
  // console.log(req.get("host"));
  res.send("Nice working");
});
app.use((err, req, res, next) => {});
