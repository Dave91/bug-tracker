const mysql = require("mysql2");

const db_conn = mysql.createConnection({
  host: "mysql.omega",
  user: "lewas1991",
  password: "lewas1991",
  database: "lewas1991",
});

module.exports = { db_conn };
