module.exports.profile =function(req,res){
    return res.render('profile.ejs',{
        title:'Users',
        user_id: 'nazims-flow'
    });
}