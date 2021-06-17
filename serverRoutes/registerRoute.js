const router = require('express').Router()
const crypto = require("crypto");
const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:' + process.env.REACT_APP_DATABASE_PASSWORD + '@localhost:5432/' + process.env.REACT_APP_DATABASE_NAME,
    ssl: false
})

router.post('/',async(req,res)=>{
    req.body.Password = (req.body.Password).trim();
    let hash = crypto.createHmac("sha256",process.env.REACT_APP_KEY);
    let password =  hash.update(req.body.Password).digest("hex");
    let d = new Date();
    let time = d.getTime().toString().trim();
    hash  = crypto.createHmac("sha256",process.env.REACT_APP_KEY)
    const TOKEN =  hash.update(time + req.body.Username).digest("hex");
    try{
        const client = await pool.connect();
        let q1 = `insert into Users values('${req.body.Username}','${req.body.Email_Id}','${password}')`;
        await client.query(q1);
        const q2 =  `INSERT INTO SESSIONS VALUES('${req.body.Email_Id}','${TOKEN}','${time}')`;
        // USE triggers to delete the expired sessions
        await client.query(q2);
        res.json({
            Token : TOKEN,
            message : "User Registered Successfully"
        })
    }catch(err){
        res.json({
            Error : err.message
        })
    }
})

module.exports  = router;