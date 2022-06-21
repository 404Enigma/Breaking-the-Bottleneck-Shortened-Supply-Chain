const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
    res.render("pages/supplier_input");
});

router.get("/list", (req, res) => {
    res.render("pages/supplier_list");
});

module.exports = router;
