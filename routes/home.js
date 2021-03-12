var home_data = require('../home-user.json');

/*
 * GET home page.
 */
exports.view = function(req, res){
	res.render('home', home_data);
};

exports.feed = function(req, res) {
	var feedSignal = req.body.feed; // a String rather than an int
	var no_burger = req.body.no_burger;
	// no_burger = (no_burger === "true");
	// console.log(typeof(feedSignal));
	// console.log(typeof(no_burger));
	// console.log(no_burger);
	if(feedSignal == 1) {
		// console.log(home_data.burger_num);
		home_data.burger_num = Math.max(home_data.burger_num - 1, 0);
		if(no_burger === "false") {
			home_data.times_fed++;
			// console.log("home fed: " + home_data.times_fed)
		}
	}
	res.send(feedSignal);
}

exports.login_profile = function(req, res) {
	var fb_whole_name = req.body.fb_whole_name;
	var fb_profile_url = req.body.fb_profile_url;
	if(fb_profile_url != "") {
		home_data.fb_whole_name = fb_whole_name;
		home_data.fb_profile_url = fb_profile_url;
	}
	res.send(home_data);
}