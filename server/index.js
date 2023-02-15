import express from "express";
import router from "./controller/dbController.js";
import cors from "cors";
const port = process.env.REACT_APP_PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/bugs", router);

app.listen(port, () => console.log("Server started: ", port));
