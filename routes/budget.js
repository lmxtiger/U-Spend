var expenses = require('../expenses.json');
var home_data = require('../home-user.json');

exports.view = function(req, res){
    res.render('budget', 
        {"expenses": expenses,
        "home_data": home_data}
    );
};

exports.budgetNew = function(req, res) {
    var cateName = req.body.cateName;
    var cateBudget = req.body.budget;
    console.log("New CateBudget: " + cateBudget);
    expenses.categories[cateName].budget = cateBudget;
    res.send(expenses.categories.cateName);
};