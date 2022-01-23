module.exports.home = function(req,res){  /// exporting the function which is an action for a route
    return res.end('<h1>Express is up for codeial!</h1>')
}

module.exports.show = function(req,res){  /// exporting the function which is an action for a route
    return res.end('<h1>Hope make it fancy web app!</h1>')
}

