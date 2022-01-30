
const Post = require('../models/post');
const User = require('../models/user');

module.exports.home = async function(req, res){
    
    
   /* Post.find({}, function(err , posts){
            return res.render('home', {               title:"Home" ,
                posts: posts                   /// this will find all the posts but only with their user id for getthing all the details of user we need to populate
            })
    }); */

    try{
     let posts= await Post.find({})
    .populate('user')   // at first populate user than populate comments and then it will again populate user of that particular comment
    .populate({
        path :'comments',  //// nested prepopulating
        populate:{
            path:'user'
        }
    })

     // populate the user for each post
    let users= await User.find({});

    return res.render('home' , {
        title: "MetaSapp|Home",
        posts:posts,
        all_users: users        
    });

    }catch(err){
        console.log('Error' , err);
        return;
    }     
    /*return res.render('home', {
        title: "Home" });*/
}


module.exports.show = function(req,res){  /// exporting the function which is an action for a route
    return res.end('<h1>Hope make it fancy web app!</h1>')
}

