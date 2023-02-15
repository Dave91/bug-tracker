import express from "express";
import mysql2 from "mysql2";
import db from "../config/dbConfig.js";
const router = express.Router();

const conn = mysql2.createConnection(db);

router.get("/all", async (req, res) => {
  try {
    const [results] = await conn.promise().query("SELECT * FROM bt_bugs");
    console.log("Bugs loaded.");
    res.status(200).send(results);
  } catch (error) {
    console.error("get error: " + error);
    res.status(500).send("Error while accessing data!");
  }
});

router.post("/add", async (req, res) => {
  try {
    let data = req.body;
    await conn
      .promise()
      .query(
        "INSERT INTO bt_bugs (bug_name, bug_details, bug_steps, bug_version, bug_priority, bug_assigned, bug_created, bug_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          data.bug_name,
          data.bug_details,
          data.bug_steps,
          data.bug_version,
          data.bug_priority,
          data.bug_assigned,
          data.bug_created,
          data.bug_status,
        ]
      );
    console.log("Bug created.");
    res.status(200).send("Bug created.");
  } catch (error) {
    console.log("add error: " + error);
    res.status(500).send("Error while writing data!");
  }
});

router.post("/del", async (req, res) => {
  try {
    let data = req.body.bugId;
    console.log(data);
    await conn.promise().query("DELETE FROM bt_bugs WHERE bug_id = ?", [data]);
    console.log("Bug removed.");
    res.status(200).send("Bug removed.");
  } catch (error) {
    console.log("del error: " + error);
    res.status(500).send("Error while removing data!");
  }
});

router.put("/edit", async (req, res) => {
  try {
    let data = req.body;
    await conn
      .promise()
      .query(
        "INSERT INTO bt_bugs (bug_name, bug_details, bug_steps, bug_version, bug_priority, bug_assigned, bug_created, bug_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          data.bug_id,
          data.bug_name,
          data.bug_details,
          data.bug_steps,
          data.bug_version,
          data.bug_priority,
          data.bug_assigned,
          data.bug_created,
          data.bug_status,
        ]
      );
    console.log("Bug created.");
    res.status(200).send("Bug created.");
  } catch (error) {
    console.log("edit error: " + error);
    res.status(500).send("Error while writing data!");
  }
});

export default router;
