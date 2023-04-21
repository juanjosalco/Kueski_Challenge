// server/index.js
const express = require("express");
const bodyParser = require('body-parser');
const fs = require("fs");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());

app.get("/api/users", (req, res) => {
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  }
  );
  var query="USE KUESKI";
  con.query(query, function (err, result, fields) {
    if (err) throw err;

  }
  );
  var query="SELECT * FROM USERS";
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    res.send(result)
  }
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Export the Express API
module.exports = app;
