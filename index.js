const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const path = require("path");
const db = new sqlite3.Database("Database.sqlite");

app.use(express.json());
app.use(express.static(path.join(__dirname, "pages")));

app.get('/', function (req, res) {
  res.send("helloo")
})

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname + "/pages/login.html"));
})

app.get('/cadastro', function (req, res) {
})


app.listen(8080, console.log("run..."));