const express = require("express");
const router = express.Router();
const admin = require("../config/db");

const db = admin.firestore();
//const supplierRef = db.collection("Suppliers");
const productRef = db.collection("Products");

router.post("/register", async (req, res) => {
    const data = req.body;
    const id = Math.floor(100000 + Math.random() * 900000);
    data.id = id.toString();

    console.log(data);

    await productRef
        .doc(data.id)
        .set(data)
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });

    return data.id;
});

module.exports = router;
