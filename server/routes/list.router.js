const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...


// POST students
router.post('/', (req, res) => {
    const newShoppingList = req.body.list;
    const sqlText = `INSERT INTO groceries (list) VALUES ($1)`;

    pool.query(sqlText, [newShoppingList])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});


module.exports = router;