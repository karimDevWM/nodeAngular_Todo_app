var express =require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupTodos = require('./controllers/setupController');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');

// for port if in production env OR default 3000 for dev env
var port = process.env.PORT || 3000;

// for browser
app.use('/', express.static(__dirname + '/public'));

// for view engine (templating)
app.set('view engine', 'ejs');

mongoose.set('strictQuery', false);
mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);

// for listening to port
app.listen(port);