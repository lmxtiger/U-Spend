var accounts = require('../accounts.json');
var home_data = require('../home-user.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	res.render('signup');
};

exports.accounts = function(req, res) {
	res.json(accounts.accounts);
};

exports.newAccount = function(req, res) {
	accounts.accounts[req.body.username] = {"password": req.body.password, "petName": req.body.petName};

	home_data.petName = req.body.petName;
	home_data.fb_whole_name = req.body.username;
	home_data.fb_profile_url = "/css/pics/accountPic.png";
	
	console.log("signup newAccount");
	console.log(accounts.accounts);
	res.send(accounts.accounts); // required in order for signup page to redirect user to home page
};
