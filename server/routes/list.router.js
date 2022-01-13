const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
// Get endpoint
router.get('/', (req, res) => {
    const sqlText = `SELECT FROM * groceries ORDER BY "name"`;
    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows)
    })
    .catch((error) => {
        console.log('GET Failed', error);
        res.sendStatus(500);
    })
});

// Post endpoint


// Delete endpoint
router.delete('/:id', (req, res) => {
    console.log('in delete endpoint', req.params.id);

    // Talk to the database
    const sqlText = `
        DELETE FROM "groceries"
        WHERE id = $1;
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



module.exports = router;