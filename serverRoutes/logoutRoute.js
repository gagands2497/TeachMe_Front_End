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
    
    let data = req.body;

    data.Token = data.Token.trim();

    try{
        const client = await pool.connect();
        let sessionData = await client.query(
            `select * from SESSIONS where Email_Id = '${data.Email_Id}'`
        );
        if(!sessionData.rows[0]){
            res.json({
                message : "Logged Out Successfully"
            })
        }
        else if(sessionData.rows[0].token_id === data.Token){
            await client.query(
                `DELETE FROM SESSIONS WHERE Email_Id = '${data.Email_Id}' `
            );
            res.json({
                message : "Logged Out Successfully"
            })
        }else{
            res.json({
                Error : "INVALID CREDENTIALS" 
            })
        }

    }catch(err){
        console.log(err);
        res.json({
            message : err.message
        })
    }

})

module.exports  = router;