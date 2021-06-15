const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 8080;

//----------------------------------------CORS HANDELING USING HEADERS--------------------------

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type, Origin , Accept , Authorization , X-Requested-With'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
})

//----------------------------------------------------------------------------------------------
app.use(express.static('build'))


app.get('/backend',(req,res)=>{
    res.json({
        name:"Gagandeep Singh"
    })
})



app.listen(port ,()=>{
    console.log("server is running on port number " + port);
})