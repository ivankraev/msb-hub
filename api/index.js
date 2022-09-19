const keys = require("./keys");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const { Pool } = require("pg");

const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});

pgClient.on("connect", async client => {

  await client
    .query("CREATE TABLE IF NOT EXISTS values (number INT)")
    .catch(err => console.log("PG ERROR", err));

});

app.get("/", (req, res) => {
  res.send("Hi");
});

app.get("/healthcheck", async (req, res) => {
  const values = await pgClient.query("SELECT * FROM values");


  res.send({ data: [...values.rows], status: "OK" });
});



app.listen(3000, err => {
  console.log("Listening");
});
