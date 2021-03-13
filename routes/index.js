
var accounts = require('../accounts.json');
var home_data = require('../home-user.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	res.render('index');
};

exports.loginAccount = function(req, res) {
	var username = req.body.username;
	console.log("index loginAccount: " + username);
	var petName = accounts.accounts[username].petName;

	home_data.petName = petName;
	home_data.fb_whole_name = username;
	home_data.fb_profile_url = "/css/pics/accountPic.png";

	console.log("index loginAccount");
	console.log(accounts.accounts);
	res.send(username);
};
