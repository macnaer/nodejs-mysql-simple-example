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

CheckUser = (username, callback) => {
  let sql = "SELECT login FROM users WHERE login LIKE '" + username + "'";
  db.query(sql, (err, result) => {
    if (err) {
    } else if (result.length != 0) {
      console.log("true");
      return callback("true");
    } else {
      console.log("false");
      return callback("false");
    }
  });
};

module.exports = {
  CheckUser
};
