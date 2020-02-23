const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get("/", (req, res) => {
    burger.selectAllBurgers((err, data) => {
        if (err) { res.status(500).end(); } else {
            const handleObject = {
                burgers: data
            };
            console.log(data)
            res.render("index", handleObject);
        };
    });
});

router.post("api/burgers", (req, res) => {
    const newBurger = req.body.burger;
    burger.addBurger(newBurger, (err, data) => {
        console.log(data);
        console.log(data.insertedRows);
        if (err || data.insertedRows == 0) { res.status(500).end(); } else {
            res.json({ id: data.insertID });
        };
    });
});

router.put("api/burgers/:id", (req, res) => {
    const updateID = req.params.id;
    const updateValue = req.body;
    burger.updateBurger(updateValue, updateID, (err, data) => {
        if (err) { res.status(500).end(); } else if (data.changeRows == 0) {
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    })

})

module.exports = router