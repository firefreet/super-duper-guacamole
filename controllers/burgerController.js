const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAllBurgers((err, data) => {
        if (err) { res.status(500).end(); } else {
            const handleObject = {
                burgers: data
            };
            res.render("index", handleObject);
        };
    });
});

router.post("/api/burgers", (req, res) => {
    const newBurger = req.body.burger;
    burger.addBurger(newBurger, (err, data) => {
        if (err || data.insertedRows == 0) { res.status(500).end(); } else {
            res.json({ id: data.insertID });
        };
    });
});

router.put("/api/burgers/:id/:devoured", (req, res) => {
    const updateID = req.params.id;
    const updateDevoured = (req.params.devoured === "true");

    burger.updateBurger(updateDevoured, updateID, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else if (data.changeRows == 0) {
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", (req, res) => {
    const deleteID = req.params.id;
    burger.deleteBurger(deleteID, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else if (data.deletedRows == 0) {
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router