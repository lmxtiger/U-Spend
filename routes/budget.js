var expenses = require('../expenses.json');

exports.view = function(req, res){
    res.render('budget', expenses);
};