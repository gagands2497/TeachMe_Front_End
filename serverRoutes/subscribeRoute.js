const router = require('express').Router()
const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:' + process.env.REACT_APP_DATABASE_PASSWORD + '@localhost:5432/' + process.env.REACT_APP_DATABASE_NAME,
    ssl: {
        rejectUnauthorized: false
    }
})

router.post('/', async (req, res) => {
    
    console.log(req.body.Email_Id)
    if (req.body.Email_Id) {
        try {
            const client = await pool.connect();
            const result = await client.query(
                `INSERT INTO Subscribed VALUES ('${req.body.Email_Id}')`
            )
            console.log(result);

            res.status(200).json({
                message: "Subscribed Successfully"
            })
        }
        catch (err) {
            res.status(500).json({
                Error: err.message
            })
        }
    }
})

module.exports = router;