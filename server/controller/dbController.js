import fs from "fs/promises";
import { Sequelize, DataTypes } from "sequelize";
import express from "express";

const router = express.Router();
export default router;

router.get("/all", bugsAll);
router.post("/add", bugsAdd);
router.delete("/:id", bugsDel);
router.post("/edit", bugsEdit);

export const bugsAll = async (req, res) => {
  try {
    let data = await fs.readFile("./data.json");
    data = JSON.parse(data);
    console.log("Bugs loaded.");
    res.status(200).json(data);
  } catch (error) {
    console.log("error: " + error);
    res.status(500).send("Error loading data!");
  }
  /*   const sequelize = new Sequelize("bugtracker", "root", "root8891", {
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  });
  const Bugs = sequelize.define("bt_bug", {
    bug_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bug_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bug_details: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    bug_steps: {
      type: DataTypes.TEXT,
    },
    bug_version: {
      type: DataTypes.STRING,
    },
    bug_priority: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bug_assigned: {
      type: DataTypes.INTEGER,
    },
    bug_created: {
      type: DataTypes.STRING,
    },
    bug_status: {
      type: DataTypes.STRING,
    },
  });
  try {
    await sequelize.authenticate();
    const data = await Bugs.findAll();
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  } */
};

export const bugsAdd = async (req, res) => {
  try {
    let data = req.body;
    let contents = await fs.readFile("./data.json");
    contents = JSON.parse(contents);
    contents.push(data);
    await fs.writeFile("./data.json", JSON.stringify(contents, null, 2));
    console.log("Bug created.");
    res.status(200).send("New data added.");
  } catch (error) {
    console.log("error: " + error);
    res.status(500).send("Error writing data!");
  }
};

export const bugsDel = async () => {
  let data = await fs.readFile("data.json");
  db = JSON.parse(data);
  return db;
};

export const bugsEdit = async (req, res) => {
  try {
    let newData = await fs.readFile("./data.json");
    newData = JSON.parse(newData);
    newData.push(data);
    await fs.writeFile("./data.json", JSON.stringify(newData, null, 2));
    console.log("Bug updated.");
    //res.status??
  } catch (error) {
    console.log("error: " + error);
    res.status(500).send("Error updating data!");
  }
};
