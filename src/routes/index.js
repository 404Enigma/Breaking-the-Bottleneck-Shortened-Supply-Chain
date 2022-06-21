const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/index");
});

router.get("/input", (req, res) => {
    res.render("pages/supplier_input");
});

module.exports = router;
