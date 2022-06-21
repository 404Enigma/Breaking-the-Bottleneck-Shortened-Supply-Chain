const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/index");
});

router.use("/supplier", require("./supplier"));

module.exports = router;
