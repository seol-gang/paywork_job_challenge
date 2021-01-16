import "reflect-metadata";
import "dotenv/config";
import express from "express";
import * as bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

import userRouter from "./routes/User.routes";

import { createConnection } from "typeorm";

createConnection()
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

const app: any = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(
  cors({
    origin: ["*"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/user", userRouter);

export default app;
