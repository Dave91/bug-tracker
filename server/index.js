import express from "express";
//import db from "./config/dbConfig.js";
import { Sequelize } from "sequelize";
//import router from "./routes/dbRoutes.js";
import router from "./controller/dbController.js";
import cors from "cors";
const port = process.env.REACT_APP_PORT || 5000;
const app = express();

/*
const db = new Sequelize("bugtracker", "root", "root8891", {
  host: "127.0.0.1:3306",
  dialect: "mysql",
});

try {
  db.authenticate();
  console.log("Connected to DB.");
} catch (error) {
  console.error("Connection error: ", error);
} */

app.use(cors());
app.use(express.json());
app.use("/bugs", router);

app.listen(port, () => console.log("Server started: ", port));
