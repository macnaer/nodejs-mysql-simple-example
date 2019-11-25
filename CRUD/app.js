const express = require("express");
const bodyParser = require('body-parser')
const path = require("path");

// Web Server
const app = express();
const PORT = 3000;

// User bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

const homeRoute = require("./routes/home");
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const deleteRoute = require("./routes/delete");

app.use(express.static(path.join(__dirname, "public")));
app.use(homeRoute);
app.use(registerRoute);
app.use(loginRoute);
app.use(deleteRoute);

app.listen(PORT, () => console.log("Server running on port ", PORT));