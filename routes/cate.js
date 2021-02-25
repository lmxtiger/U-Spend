var expenses = require('../expenses.json');

exports.viewEachCate = function(req, res){
    // var cateName = req.param;
    var exp_list = expenses['cates-expenses'];
    // console.log(exp_list);
    res.render('cate', exp_list);
};

// expenses['cates-expenses'][cateName]
// expenses['cates-expenses']['Food/Drink']