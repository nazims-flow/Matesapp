const express = require('express');     // index.jthis file will send in a request to routes/index and these will further routes used for further routing
const app =express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const port = 8000;
const db = require('./config/mongoose');

app.use(express.static('./assets'));

//set up view engine
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, '/views'));


app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//use express router
app.use('/', require('./routes'));


app.listen(port , function(err){
    if(err){
        console.log(`Error in running server${err}`);
    }
    console.log(`Server is running at port ${port}`);
})