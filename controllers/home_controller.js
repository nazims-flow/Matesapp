module.exports.home = function(req,res){  /// exporting the function which is an action for a route
    return res.render('home.ejs',{
        title:'Home'
    });
}

module.exports.show = function(req,res){  /// exporting the function which is an action for a route
    return res.end('<h1>Hope make it fancy web app!</h1>')
}

