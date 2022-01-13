const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...


// POST groceries
router.post('/', (req, res) => {
    console.log('this is req.body', req.body);
    const sqlText = 
    `INSERT INTO "groceries" ("list") 
    VALUES ($1)`;

    let queryParams = [
        req.body.list
    ]

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