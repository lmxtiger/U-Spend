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
	res.render('home', burger_num);
};

exports.feed = function(req, res) {
	var feedSignal = req.body.feed;
	if(feedSignal == 1) {
		console.log(burger_num.burger_num);
		burger_num.burger_num = Math.max(burger_num.burger_num - 1, 0);
	}
	res.send(feedSignal);
}