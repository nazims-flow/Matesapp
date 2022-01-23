const express = require('express');     // index.jthis file will send in a request to routes/index and these will further routes used for further routing
const app =express();

const port = 8000;


//use express router
app.use('/', require('./routes'));


app.listen(port , function(err){
    if(err){
        console.log(`Error in running server${err}`);
    }
    console.log(`Server is running at port ${port}`);
})