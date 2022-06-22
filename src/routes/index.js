const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/index");
});

// router.get("/product/details", (req, res) => {
//     res.render("pages/product_details");
// });
router.get("/product/register", (req, res) => {
    res.render("pages/product_input");
});

router.use("/supplier", require("./supplier"));
router.use("/product", require("./product"));

module.exports = router;
