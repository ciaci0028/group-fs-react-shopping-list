const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// TODO - Add routes here...
// Get endpoint
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "groceries"`;
    pool.query(sqlText)
    .then((result) => {
        console.log('results', result);
        res.send(result.rows)
    })
    .catch((error) => {
        console.log('GET Failed', error);
        res.sendStatus(500);
    })
});

// Post endpoint
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

// Delete endpoint
router.delete('/:id', (req, res) => {
    console.log('in delete endpoint', req.params.id);

    // Talk to the database
    const sqlText = `
        DELETE FROM "groceries"
        WHERE id = $1
    `;

    // For secrecy
    const sqlParams = [
        req.params.id
    ];

    // Pool query to delete from db
    pool.query(sqlText, sqlParams)
        .then( () => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('failed to delete', error);
            res.sendStatus(500);
        })
}); // End delete endpoint

// Delete endpoint
router.delete('/', (req, res) => {
    console.log('in clearAll endpoint');

    // Talk to the database
    const sqlText = `
        DELETE FROM "groceries"
    `;

    // For secrecy
    

    // Pool query to delete from db
    pool.query(sqlText)
        .then( () => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('failed to clear', error);
            res.sendStatus(500);
        })
}); // End delete endpoint

// Put endpoint
router.put('/:id', (req, res) => {
    console.log('in put endpoint', req.params.id);
    console.log('req.body', req.body);

    // Talk to database
    // THIS NEEDS TO BE MODIFIED MORE
    let sqlText = `
        UPDATE "groceries"
        SET "purchased" = $1
        WHERE "id" = $2;
    `;

    let sqlParams = [
        req.body.purchased,
        req.params.id
    ];

    // Send to database
    pool.query(sqlText, sqlParams)
        .then(dbRes => {
            console.log('put success', dbRes.rows);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('put failure', error);
            res.sendStatus(500);
        });
}) // End put endpoint






module.exports = router;
