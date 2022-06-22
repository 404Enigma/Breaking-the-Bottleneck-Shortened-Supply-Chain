require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use("/", express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require("./src/routes/index"));

app.listen(PORT, () => {
    console.log(`Listing on ${PORT}`);
});
