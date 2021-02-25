var expenses = require('../expenses.json');

exports.viewEachCate = function(req, res){
    var cateName = req.params.cateName;
    // console.log(cateName);
    var exp_list = expenses['cates-expenses'][cateName];
    var res_render = {
        "cateName": cateName,
        "exp_list": exp_list
    }
    console.log(res_render);
    res.render('cate', res_render);
};

// expenses['cates-expenses'][cateName]
// expenses['cates-expenses']['Food/Drink']