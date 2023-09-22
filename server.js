import express from "express";
import userRoutes from "./routes/user.js";
import bodyParser from "body-parser";

import cors from "cors";
import { databaseConnection } from "./database/user.js";
const app = express();

const router = express.Router();

const Port = 4099;

app.use("/", router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));

// routes using here
app.use("/api/v1/users", userRoutes);

databaseConnection(() => {
  app.listen(Port, () => {
    console.log(`server listening on port ${Port}`);
  });
});
