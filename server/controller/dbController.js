import express from "express";
import mysql2 from "mysql2";

const router = express.Router();

const conn = mysql2.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "root8891",
  database: "bugtracker",
  /* host: process.env.REACT_APP_DB_HOST,
  port: process.env.REACT_APP_DB_PORT,
  user: process.env.REACT_APP_DB_USER,
  password: process.env.REACT_APP_DB_PASSWORD,
  database: process.env.REACT_APP_DB_DATABASE, */
});

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
    let data = req.dbody;
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

router.delete("/del", async (req, res) => {
  try {
    let data = req.dbody; //.split(".")[0];
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
    let data = req.dbody;
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
