//import { db } from "./authController";

import { Collection } from "mongoose";

//db.collection("bt_bugs").get()

export default function dbQuery() {
  const db_conn = require("mongoose").connect(
    process.env.REACT_APP_DB_CONNECTION
  );
  let db_data;
  db_conn.then(() => {
    Collection("bugs").find({}, function (err, results) {
      if (err) throw err;
      db_data = results;
    });
  });

  return db_data;
}
