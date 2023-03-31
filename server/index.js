// server/index.js
const express = require("express");
const bodyParser = require('body-parser');
const fs = require("fs");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());
//users
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
app.get("/api/users/:id", (req, res) => {
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
  });
  con.connect(function(err) {
    if (err) throw err;
  });
  var query="USE KUESKI";
  con.query(query, function (err, result, fields) {
    if (err) throw err;

  });
  var query="SELECT * FROM USERS WHERE ID="+req.params.id;
  con.query(query, function (err, result, fields) {
    if (err){
      res.send("No existe el usuario")
      throw err;
    }
    res.send(result)
  }
  );
});

//arco
app.get("/api/arco", (req, res) => {
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
  });
  con.connect(function(err) {
    if (err) throw err;
  });
  var query="USE KUESKI";
  con.query(query, function (err, result, fields) {
    if (err) throw err;

  });
  var query="SELECT * FROM SOLICITUD_ARCO";
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    res.send(result)
  });
});
app.get("/api/arco/:id", (req, res) => {
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
  });
  con.connect(function(err) {
    if (err) throw err;
  });
  var query="USE KUESKI";
  con.query(query, function (err, result, fields) {
    if (err) throw err;

  });
  var query="SELECT * FROM SOLICITUD_ARCO WHERE ID="+req.params.id;
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    res.send(result)
  });
});





app.get("/api/pet", (req, res) => {
  fs.readFile( __dirname + "/" + "pets.json", "utf8", (err, data) => {
    console.log( data );
    res.end( data );
  });
});

app.get("/api/movies", (req, res) => {
  fs.readFile(__dirname + "/" + "movies.json", "utf8", (err, data) => {
    res.end(data);
  })
})

app.post("/api/pet", (req, res) => {
  console.log('El cuerpo de la peticion:', req.body);
});

app.post("/api/movies", (req, res) => {
  console.log('El cuerpo de la peticion:', req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

