// server/index.js
const express = require("express");
const bodyParser = require('body-parser');
const fs = require("fs");
require('dotenv').config()
const mysql = require('mysql2')

const DB=process.env.DATABASE_URL
const con= mysql.createConnection(DB)
const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());
//users
app.get("/api/users", (req, res) => {
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  }
  );
  var query="SELECT * FROM USERS JOIN ADDRESS ON USERS.ADDRESS_ID = ADDRESS.ADDRESS_ID JOIN IDENTIFICATIONS ON USERS.ID = IDENTIFICATIONS.USER_ID;";
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    res.send(result)
  }
  );
  con.end();
});
app.get("/api/users/:id", (req, res) => {
  const con = mysql.createConnection(process.env.DATABASE_URL)
  con.connect(function(err) {
    if (err) throw err;
  });
  var query="SELECT * FROM USERS JOIN ADDRESS ON USERS.ADDRESS_ID = ADDRESS.ADDRESS_ID JOIN IDENTIFICATIONS ON USERS.ID = IDENTIFICATIONS.USER_ID WHERE USERS.ID="+req.params.id;
  con.query(query, function (err, result, fields) {
    if (err){
      res.send("No existe el usuario")
      throw err;
    }
    res.send(result)
  }
  );
});
app.put('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const { address_id, f_name, lname1, lname2, birth_date, nationality, state_born_in, occupation, curp, gender, phone_number, email, rfc, is_client, id_type, id_number } = req.body;

  // Update user in the database
  const userQuery = 'UPDATE USERS SET ADDRESS_ID = ?, F_NAME = ?, LNAME1 = ?, LNAME2 = ?, BIRTH_DATE = ?, NATIONALITY = ?, STATE_BORN_IN = ?, OCCUPATION = ?, CURP = ?, GENDER = ?, PHONE_NUMBER = ?, EMAIL = ?, RFC = ?, IS_CLIENT = ? WHERE ID = ?';
  const userValues = [address_id, f_name, lname1, lname2, birth_date, nationality, state_born_in, occupation, curp, gender, phone_number, email, rfc, is_client, userId];
  const userResult = await pool.query(userQuery, userValues);

  // Update address in the database
  const addressQuery = 'UPDATE ADDRESS SET COUNTRY = ?, STATE = ?, CITY = ?, NEIGHBORHOOD = ?, ZIP_CODE = ?, STREET = ?, EXT_NUMBER = ?, INT_NUMBER = ? WHERE ADDRESS_ID = ?';
  const addressValues = [req.body.country, req.body.state, req.body.city, req.body.neighborhood, req.body.zip_code, req.body.street, req.body.ext_number, req.body.int_number, address_id];
  const addressResult = await pool.query(addressQuery, addressValues);

  // Update identification in the database
  const idQuery = 'UPDATE IDENTIFICATIONS SET ID_TYPE = ?, ID_NUMBER = ? WHERE USER_ID = ?';
  const idValues = [id_type, id_number, userId];
  const idResult = await pool.query(idQuery, idValues);

  res.status(200).send('User updated successfully');
});
  

//arco
app.get("/api/arco", (req, res) => {
  con.connect(function(err) {
    if (err) throw err;
  });
  var query="SELECT * FROM SOLICITUD_ARCO";
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    res.send(result)
  });
});
app.get("/api/arco/:id", (req, res) => {
  con.connect(function(err) {
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

