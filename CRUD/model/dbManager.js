const mysql = require("mysql");

// MYSQL Server
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "company"
});

db.connect(err => {
    if (err) {
        throw err;
        console.log("Connection error => ", err);
    }
    console.log("Mysql server connected...");
});

module.exports = db;