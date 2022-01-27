const mongoose = require('mongoose');


const postSchema =new mongoose.Schema({
    content :{
        type: String,
        required :true
    },
    user: { /// link it to the user   it to be refereed to the users schema
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
        
    },
},{
    timestamps:true
});


const Post = mongoose.model('Post',postSchema);

module.exports =Post;