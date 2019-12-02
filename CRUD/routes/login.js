const express = require("express");
const path = require("path");
const { SignIn } = require("../model/dbManager");

const router = express.Router();

router.get("/login", (req, res) => {
	console.log(req.body);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.send("Works");
//res.sendFile(path.join(__dirname, "../", "views", "login.html"));
})

router.post("/login", (req,res) => {
	console.log("POST/Login",req.body);
    const formData = {
        login: req.body.login,
        password: req.body.password
    }
    SignIn(formData, function(result){
        res.send(result);
    })
})


module.exports = router;