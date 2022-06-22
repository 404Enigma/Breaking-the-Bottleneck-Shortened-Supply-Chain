const express = require("express");
const router = express.Router();
const admin = require("../config/db");

const db = admin.firestore();
const supplierRef = db.collection("Suppliers");
const productRef = db.collection("Products");

router.get("/register", (req, res) => {
    res.render("pages/supplier_input");
});

router.get("/list", async (req, res) => {
    let supplierData = [];
    const snapshot = await supplierRef.get();
    snapshot.forEach((doc) => {
        // console.log(doc.id, "=>", doc.data());
        supplierData.push(doc.data());
    });

    console.log(supplierData);

    res.render("pages/supplier_list", { supplierData });
});

router.get("/:name", async (req, res) => {
    const supplier_name = req.params.name;
    let productData = [];

    const snapshot = await productRef.where("supplier", "==", supplier_name).get();
    if (snapshot.empty) {
        console.log("No matching documents.");
        return;
    }

    snapshot.forEach((doc) => {
        // console.log(doc.id, '=>', doc.data());
        productData.push(doc.data());
    });

    console.log(productData);

    res.render("pages/product_details", { productData });
});

router.post("/register", async (req, res) => {
    const data = req.body;

    console.log(data);

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
