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
      throw err;
    } else if (result.length != 0) {
      return callback("true");
    } else {
      return callback("false");
    }
  });
};

CreateUser = (formData, callback) => {
  const sql = "INSERT INTO `users` SET ? ";
  const data = {
    login: formData.username,
    email: formData.email,
    password: formData.password
  }
  db.query(sql, data, (err, result) => {
    if (err){
      throw err;
    }else{
      console.log(result);
      return callback("created");
    }
  })
}

module.exports = {
  CheckUser,
  CreateUser
};
