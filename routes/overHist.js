var expenses = require('../expenses.json');
var home_data = require('../home-user.json');

function addToArray(objects, arr) {
    for (var cate in objects) {
        for(var item of objects[cate]) {
            arr.push(item);
        }
    }
    return arr;
}

// Render overHist screen
exports.view = function(req, res){
    // var all_expenses = [];
    // all_expenses = addToArray(expenses['cates-expenses'], all_expenses);
    // console.log("# of items: " + all_expenses.length);
    res.render('overHist', 
        {"expenses": expenses,
        "home_data": home_data} 
    );
};

exports.overHistProgBar = function(req, res) {
    res.json(expenses.categories);
};

// Insert new entry into expenses.json
exports.overHistNew = function(req, res){
    var cate = req.body.cate;
    var newEntry = {
        "name": req.body.name_val,
        "amount": req.body.amt_val,
        "category": cate[1],
        "rating": req.body.rating_val,
        "date": req.body.date_val
    };
    if(cate[0] == "-1") {
        expenses['cates-expenses'][cate[1]] = [newEntry];
        expenses['categories'][cate[1]] = {
            "budget": false,
            "spent": req.body.amt_val,
            "id": Object.keys(expenses.categories).length
        };
    }else{
        expenses['cates-expenses'][cate[1]].unshift(newEntry);
        expenses['categories'][cate[1]].spent = expenses['categories'][cate[1]].spent + parseFloat( req.body.amt_val );
    }
    expenses["history"].unshift(newEntry);
    // Increment burger count on logging a new expense
    home_data.burger_num++;
    res.send(newEntry);
};
