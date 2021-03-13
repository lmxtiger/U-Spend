
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
// var handlebars = require('handlebars');
// handlebars "repeat"
// const repeat = require('handlebars-helper-repeat');
// handlebars.registerHelper('repeat', repeat);

var index = require('./routes/index');
var signup = require('./routes/signup');
var home = require('./routes/home');
var addNewEntry = require('./routes/addNewEntry');
var overHist = require('./routes/overHist');
var cate = require('./routes/cate');
var budget = require('./routes/budget');
var profile = require('./routes/profile');
var help = require('./routes/help');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded( {extended: true} ) );
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.post('/loginAccount', index.loginAccount);

app.get('/signup', signup.view);
app.get('/accounts', signup.accounts);
app.post('/newAccount', signup.newAccount);

app.get('/home', home.view);
app.post('/feed', home.feed);
app.post('/login_profile', home.login_profile);

app.get('/addNewEntry', addNewEntry.addNewEntry);

app.get('/overHist', overHist.view);
app.get('/overHistProgBar', overHist.overHistProgBar);
app.post('/overHistNew', overHist.overHistNew);

app.get('/budget', budget.view);
app.post('/budgetNew', budget.budgetNew);
app.post('/cateNew', budget.cateNew);

app.get('/help', help.view);
app.get('/profile', profile.view);
app.get('/cate/:cateName', cate.viewEachCate);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
