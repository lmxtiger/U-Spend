var burger_num = require('../feed.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	// var req_click = req.body;
	// console.log(req_click);
	// if(req_click != null) {
	// 	burger_num.burger_num = Math.max(burger_num.burger_num - 1, 0);
	// 	console.log("Num of burgers: ", burger_num.burger_num);
	// }
	res.render('index', burger_num);
};