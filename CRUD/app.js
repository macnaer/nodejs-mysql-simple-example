const express = require("express");
const bodyParser = require('body-parser')

// Web Server
const app = express();
const PORT = 3000;

// User bodyParser
app.use(bodyParser.urlencoded({ extended: false }))

const homeRoute = require("./routes/home");
const registerRoute = require("./routes/register");
app.use(homeRoute);
app.use(registerRoute);

app.listen(PORT, () => console.log("Server running on port ", PORT));