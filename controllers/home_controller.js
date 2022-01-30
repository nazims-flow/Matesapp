
const Post = require('../models/post');
const User = require('../models/user');

module.exports.home = function(req, res){
    
    
   /* Post.find({}, function(err , posts){
            return res.render('home', {
                title:"Home" ,
                posts: posts                   /// this will find all the posts but only with their user id for getthing all the details of user we need to populate
            })
    }); */


    Post.find({})
    .populate('user')   // at first populate user than populate comments and then it will again populate user of that particular comment
    .populate({
        path :'comments',  //// nested prepopulating
        populate:{
            path:'user'
        }
    })
    .exec(function(err , posts){  // populate the user for each post
        User.find({},function(err, users){
            return res.render('home', {
                title:"Home" ,
                posts: posts ,
                all_users : users
            });
        });
        
    });
    
    
    
    
    /*return res.render('home', {
        title: "Home" });*/
}

module.exports.show = function(req,res){  /// exporting the function which is an action for a route
    return res.end('<h1>Hope make it fancy web app!</h1>')
}

