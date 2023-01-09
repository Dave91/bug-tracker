const mysql = require("mysql");

const db_conn = mysql.createConnection({
  host: process.env.REACT_APP_DB_HOST,
  user: process.env.REACT_APP_DB_USER,
  password: process.env.REACT_APP_DB_PASSWORD,
  database: process.env.REACT_APP_DB_DATABASE,
});

let db_data;

// MySQL queries as separate funcs here??? like authController??
db_conn.connect(function (error) {
  if (error) throw error;
  db_conn.query("SELECT * FROM bugs", function (error, results, fields) {
    if (error) throw error;
    db_data = results;
  });
});

db_conn.end();

export default db_data;
