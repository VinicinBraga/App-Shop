const express = require("express");
const app = express();
const port = 3001;
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "crudgames",
});

app.get("/", (req, res) => {
  let SQL =
    "INSERT INTO games (name, price, category) VALUES ('Far Cry 6', '120', 'Action')";
  db.query(SQL, (err, result) => {
    console.log(err);
  });
});

app.listen(port, () => console.log(`Example app listening on port port!`));
