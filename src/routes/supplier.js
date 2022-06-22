const express = require("express");
const router = express.Router();
const admin = require("../config/db");

const db = admin.firestore();
const supplierRef = db.collection("Suppliers");

router.get("/register", (req, res) => {
    res.render("pages/supplier_input");
});

router.get("/list", (req, res) => {
    res.render("pages/supplier_list");
});

router.post("/register", async (req, res) => {
    const data = req.body.data;

    await supplierRef
        .doc(data.name)
        .set(data)
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });

    return data.name;
});

const vendor_register = async (userid, obj) => {
    await docRef
        .doc(userid)
        .set(obj)
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    return userid;
};

module.exports = router;
