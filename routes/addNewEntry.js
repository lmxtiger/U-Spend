const {json} = require('express');
var expenses = require('../expenses.json');

exports.addNewEntry = function(req, res){

    res.render('addNewEntry', expenses);
};

