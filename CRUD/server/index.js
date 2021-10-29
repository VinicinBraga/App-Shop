const express = require("express");
const app = express();
const port = 3001;
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "crudgames",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { price } = req.body;
  const { category } = req.body;
  let SQL = "INSERT INTO games ( name, price, category ) VALUES ( ?, ? ,? )";

  db.query(SQL, [name, price, category], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.get("/getCards", (req, res) => {
  let SQL = "SELECT * from games";
  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.put("/edit", (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { price } = req.body;
  const { category } = req.body;
  let SQL =
    "UPDATE games SET name = ?, price = ?, category = ? WHERE idgames = ?";
  db.query(SQL, [name, price, category, id], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  let SQL = "DELETE from games WHERE idgames = ?";
  db.query(SQL, [id], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});
app.listen(port, () => console.log(`Example app listening on port port!`));
