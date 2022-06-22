const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/index");
});

router.get("/product/details", (req, res) => {
    res.render("pages/product_details");
});

router.use("/supplier", require("./supplier"));

module.exports = router;
