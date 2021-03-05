var home_data = require('../feed.json');

exports.view = function(req, res){
    res.render('profile', home_data);
};