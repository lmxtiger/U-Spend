var home_data = require('../feed.json');

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
	res.render('home', home_data);
};

exports.feed = function(req, res) {
	var feedSignal = req.body.feed;
	if(feedSignal == 1) {
		console.log(burger_num.burger_num);
		home_data.burger_num = Math.max(home_data.burger_num - 1, 0);
	}
	res.send(feedSignal);
}

exports.login_profile = function(req, res) {
	var fb_whole_name = req.body.fb_whole_name;
	var fb_profile_url = req.body.fb_profile_url;
	// console.log(fb_whole_name);
	if(fb_profile_url != "") {
		home_data.fb_whole_name = fb_whole_name;
		home_data.fb_profile_url = fb_profile_url;
	}
	res.send(home_data);
}