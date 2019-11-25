const express = require("express");
const path = require("path");


const router = express.Router();

router.get("/delete", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "delete.html"));
})

router.post("/delete", (req,res) => {
    // Write code heare!
})


module.exports = router;