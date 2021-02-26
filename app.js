
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
// handlebars "repeat"
// const repeat = require('handlebars-helper-repeat');
// handlebars.registerHelper('repeat', repeat);

var index = require('./routes/index');
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
app.use(express.urlencoded());
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
app.get('/addNewEntry', addNewEntry.addNewEntry);
app.get('/overHist', overHist.view);
app.get('/budget', budget.view);
app.get('/help', help.view);
app.get('/profile', profile.view);
app.get('/cate/:cateName', cate.viewEachCate);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
