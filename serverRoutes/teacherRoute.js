const router = require('express').Router()
const crypto = require("crypto");
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:' + process.env.REACT_APP_DATABASE_PASSWORD + '@localhost:5432/' + process.env.REACT_APP_DATABASE_NAME,
    ssl: {
        rejectUnauthorized: false
  }
})

router.post('/',async(req,res)=>{
    
    
    console.log(req.body);
    res.json({
        message : "code must be good"
    })

})

module.exports  = router;