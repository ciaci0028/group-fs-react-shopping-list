const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...


// POST groceries
router.post('/', (req, res) => {
    console.log('this is req.body', req.body);
    const sqlText = 
    `INSERT INTO "groceries" ("name", "quantity", "unit") 
    VALUES ($1, $2, $3)`;

    let queryParams = [
        req.body.name,
        req.body.quantity,
        req.body.unit
    ];

    pool.query(sqlText, queryParams)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});


module.exports = router;
