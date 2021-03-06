var home_data = require('../home-user.json');

/*
 * GET home page.
 */
exports.view = function(req, res){
	res.render('home', home_data);
};

exports.feed = function(req, res) {
	var feedSignal = req.body.feed;
	if(feedSignal == 1) {
		console.log(home_data.burger_num);
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