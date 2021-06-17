const router = require('express').Router()
const crypto = require("crypto");
const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:' + process.env.REACT_APP_DATABASE_PASSWORD + '@localhost:5432/' + process.env.REACT_APP_DATABASE_NAME,
    ssl: process.env.DATABASE_URL ? true : false
})

router.post('/',async(req,res)=>{
    req.body.Password = (req.body.Password).trim();
    if(req.body.Token)
    {

        req.body.Token = req.body.Token.trim()
        let d = new Date();
        let time = d.getTime().toString().trim();

        try{
            const client = await pool.connect();
            let sessionData = await client.query(
                `SELECT * FROM SESSIONS WHERE Email_Id = '${req.body.Email_Id}'`
            );

            const user = sessionData.rows[0];
            if(!user){
                res.status(500).json({
                    Error : "Please Register first"
                })
            }
            else if(user.token_id === req.body.Token){

                let time1 = parseInt(user.start_time);
                let d = new Date();
                let time2 = d.getTime();
                let diff = (time2 - time1)/(1000*60*60);

                if(diff <= 24)
                {
                    res.json({
                        message : "Logged in successfully"
                    })
                }else{
                    
                    res.status(500).json({

                        message : "Session Expired"
                    })
                }
            }else{
                res.status(500).json({
                    Error : "Invalid Credentials"
                })
            }
        }catch(err){
            res.status(500).json({
                Error : err.message
            })
        }


    }else if(req.body.Password)
    {
        req.body.Password = (req.body.Password).trim();
        let hash = crypto.createHmac("sha256",process.env.REACT_APP_KEY);
        let password =  hash.update(req.body.Password).digest("hex");
        
        
        try{
            
            const client = await pool.connect();
            const result = await client.query(
                `SELECT * FROM Users WHERE Email_Id = '${req.body.Email_Id}'`
            )
            
            let user = result.rows[0];
            if(!user){
                res.status(500).json({
                    Error : "Please Register first"
                })
            }
            else if(user.password === password){
                let d = new Date();
                let hash2 = crypto.createHmac("sha256",process.env.REACT_APP_KEY);
                let time = d.getTime().toString();
                let TOKEN = hash2.update(time + req.body.Username).digest('hex');
                await client.query(
                    `DELETE FROM SESSIONS WHERE Email_Id = '${req.body.Email_Id}'`
                );
                await client.query(
                    `INSERT INTO SESSIONS VALUES('${req.body.Email_Id}','${TOKEN}','${time}')`
                );
                res.json({
                    Token :TOKEN,
                    message : "Logged in Successfully"
                })
            }else{
                res.status(500).json({
                    Error : "Invalid Credentials"
                })
            }

        }catch(err){
            res.status(500).json({
                Error : err.message
            })
        }

    }else{
        res.status(500).json({
            Error : " Credentials cannot be empty "
        })
    }

})

module.exports  = router;