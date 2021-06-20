const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const path =  require('path')
const port = process.env.PORT || 8080;
const registerRoute = require('./serverRoutes/registerRoute')
const loginRoute = require('./serverRoutes/loginRoute')
const logoutRoute = require('./serverRoutes/logoutRoute')
const teacherRoute = require('./serverRoutes/teacherRoute')


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
app.use('/api/teacher',teacherRoute);
// -------------------

app.get('*', (req,res) =>{
    res.sendFile((__dirname + '/build/index.html'));
});


app.listen(port ,()=>{
    console.log("server is running on port number " + port);
})