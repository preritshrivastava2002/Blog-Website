const express = require("express");
const ejs = require("ejs");
const mongoose = require('mongoose');
const routes = require("./routes/routes");
const user = require("./routes/user");

require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(routes);

const PORT = process.env.PORT || 3000;

const DATABASE_URL = process.env.CONNECTION_URL;

app.listen(PORT, ()=>{
  console.log("Server started");
  mongoose 
    .connect(DATABASE_URL, {useNewUrlParser: true,useUnifiedTopology: true})
    .then("Connected Successfully")
    .catch((err)=> console.log(err))
});
