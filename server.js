const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const path =  require('path')
const port = process.env.PORT || 8080;
const https = require('https');
const fs = require('fs');
const registerRoute = require('./serverRoutes/registerRoute')
const loginRoute = require('./serverRoutes/loginRoute')
const logoutRoute = require('./serverRoutes/logoutRoute')


//----------------------------------------CORS HANDELING USING HEADERS--------------------------
// app.all(bodyParser.urlencoded({extended:false}));
// app.all();

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
app.use(express.static('build'));
app.use(express.json());

// ------Routes--------

app.use('/api/register',registerRoute);
app.use('/api/login',loginRoute);
app.use('/api/logout',logoutRoute);

// -------------------

app.get('*', (req,res) =>{
    res.sendFile((__dirname + '/build/index.html'));
});

const server = https.createServer({
    key: fs.readFileSync(path.join(__dirname,'cert','key.pem')),
    cert:fs.readFileSync(path.join(__dirname,'cert','cert.pem'))
},app);


server.listen(port,()=>{
    console.log(`server is listening on port ` + port);
})
