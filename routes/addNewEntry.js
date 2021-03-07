const {json} = require('express');
var expenses = require('../expenses.json');
var home_data = require('../home-user.json');

exports.addNewEntry = function(req, res){

    res.render('addNewEntry', 
        {"expenses": expenses,
         "home_data": home_data}
    );
};

