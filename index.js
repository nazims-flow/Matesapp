const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 800;
const expressLayouts = require('express-ejs-layouts');
// used for session cookie
const session = require('express-session');
const db = require('./config/mongoose');
const MongoStore =require('connect-mongo');
const flash = require('connect-flash');
const customWare = require('./config/middleware');



const passport= require('passport');  // requiring both is necessary
const passportLocal = require('./config/passport-local-strategy');


app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);



// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');



// mongo store is used to store the session cookie in the db

app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({   // for v 4 and above
        mongoUrl: 'mongodb://localhost/codeial_development' ,
        autoRemove: 'disabled' 
    })
    
}));


app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(flash()); // these uses session cookie flash message will be setup in th cookie in which it stores session info
app.use(customWare.setFlash);

// use express router
app.use('/', require('./routes'));



app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});



/// npm i connect-mongo library to store the cookies in db
