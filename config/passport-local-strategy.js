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



module.exports = passport;