var home_data = require('../home-user.json');

exports.view = function(req, res){
    res.render('help', home_data);
};