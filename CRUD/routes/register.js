const express = require("express");
const path = require("path");
const { CheckUser } = require("../model/dbManager");
const { CreateUser } = require("../model/dbManager");

const router = express.Router();

router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "register.html"));
});

router.post("/register", (req, res) => {
  const formData = {
    username: req.body.login,
    email: req.body.email,
    password: req.body.password,
    repassword: req.body.repassword
  };

  if (formData.password != formData.repassword) {
    res.send("Password not match!");
  } else {
   
    CheckUser(formData.username, function(result) {
      if (result == "false"){
        CreateUser(formData, function(createResult){
          res.send(`<h1>${createResult}</h1>`);
        })
      }
      else{
        res.send("<h1>User exist. </h1>")
      }
      
    });
  }
});

module.exports = router;
