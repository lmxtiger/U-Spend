var expenses = require('../expenses.json');
var home_data = require('../home-user.json');

exports.viewEachCate = function(req, res){
    var cateName = req.params.cateName;
    // console.log("cate.js :" + cateName);
    var exp_list = expenses['cates-expenses'][cateName];
    var budget_spent = expenses['categories'][cateName];
    var res_render = {
        "cateName": cateName,
        "budget_spent": budget_spent,
        "exp_list": exp_list
    }
    res.render('cate', res_render);
};
