
const Post = require('../models/post');

module.exports.home = function(req, res){
    
    
   /* Post.find({}, function(err , posts){
            return res.render('home', {
                title:"Home" ,
                posts: posts                   /// this will find all the posts but only with their user id for getthing all the details of user we need to populate
            })
    }); */


    Post.find({}).populate('user').exec(function(err , posts){  // populate the user for each post
        return res.render('home', {
            title:"Home" ,
            posts: posts 
        })
    })
    
    
    
    
    /*return res.render('home', {
        title: "Home" });*/
}

module.exports.show = function(req,res){  /// exporting the function which is an action for a route
    return res.end('<h1>Hope make it fancy web app!</h1>')
}

