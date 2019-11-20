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


exports.CheckUser =  (formData) => {
    let msg = "DBManager!";
    let sql = "SELECT login FROM users WHERE login LIKE \'" + formData.username + "\'";
    db.query(sql, (err, result) => {
        if (err) {
            console.log("First place!");
            msg = err;
            console.log(msg);
        }
        else {
            if (result.length == 0) {
                const sql = "INSERT INTO `users` SET ? ";
                const data = {
                    login: formData.username,
                    email: formData.email,
                    password: formData.password
                }
                db.query(sql, data, (err, result) => {
                    if (err) {
                        msg = arr;
                        console.log(msg);
                    }
                    else {
                        msg = "<h2>User created!</h2>";
                        console.log(msg);
                    }
                })
            }
            else {
                msg = "<h2>User exist.</h2>"
                console.log("Inside", msg);
            }
        }
    });
    return msg;
}
