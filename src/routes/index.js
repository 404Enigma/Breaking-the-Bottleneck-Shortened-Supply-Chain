const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/index");
});

router.get("/input", (req, res) => {
    res.render("pages/supplier_input");
});

router.get("/list", (req, res) => {
    res.render("pages/supplier_list");
});

module.exports = router;
