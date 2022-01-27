const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user')


/// authentication using passport
passport.use('local' ,new LocalStrategy({
    usernameField: 'email'
    },function(email, password, done){
            // find a user and establish

            User.findOne({email:email}, function(err , user){
                if(err){
                    console.log('Error in finding user---->passport');
                    return done(err);

                }

                if(!user || user.password != password){

                    console.log('Invalid username/password');
                    return done(null , false);

                }
                
                return done(null, user);
            });
    }

));



// serializing the user to decide which key is to be kept in t cookies
passport.serializeUser(function(user , done){
    done(null , user.id);  // wanting to store users id encrypted format in to the cookie
});






// deserializing  the user from the key in the cookies

passport.deserializeUser(function(id , done){

    User.findById(id,function(err,user){
        if(err){
            console.log('Error in finding user---->passport');
            return done(err);

        }

        return done(null , user);

    });

});

///sending data of the signed in current user to the views

// check if the user is authenticated

passport.checkAuthentication = function (req , res , next){
    // if the user is signed -in , then pass on the request to the next functional (controllers action)
    if(req.isAuthenticated()){
        return next();
    }

    // if the user is not signed in
    return res.redirect('/users/sign-in');

}


passport.setAuthenticatedUser = function (req , res , next){
    if(req.isAuthenticated()){
        // req.user contains the current signed in user from the session cookie and we are just sending to the locals for the views
        res.locals.user = req.user;
       }

       next();  // referncing it to index.js
}

module.exports = passport;