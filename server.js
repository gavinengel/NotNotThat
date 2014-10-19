/*
//basic web image/file server
var connect = require('connect');
var port = 1337;
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(port);

console.log('serving at ' + port);

*/



'use strict';
/**
 * Module dependencies.
 */
var init = require('./config/init')(),
  config = require('./config/config'),
  mongoose = require('mongoose');

/* Bootstrap db connection
var db = mongoose.connect(db.url, function(err) {
  if (err) {
    console.error('\x1b[31m', 'Could not connect to MongoDB!');
    console.log(err);
  }
});

*/

// Bootstrap db connection
var db = mongoose.connect(config.db, function(err) {
  if (err) {
    console.error('\x1b[31m', 'Could not connect to MongoDB!');
    console.log(err);
  }
});


var app = require('./config/express')(db);

// Bootstrap passport config
require('./config/passport')();


// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('MEAN.JS application started on port ' + config.port);
// modules =================================================
//var express        = require('express');
// Init the express application



/*
//var app            = express();
//var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');


var flash    = require('connect-flash');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
// configuration ===========================================
  
// config files
var db = require('./config/db');
//var configDB = require('./config/database.js'); 

require('./config/passport')(passport); // pass passport for configuration

var port = process.env.PORT || 8080; // set our port



var Hegel = require('./app/models/hegel');


 //var db = mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)



// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(cookieParser()); // read cookies (needed for auth)

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users


var router = express.Router();        // get an instance of the express Router


// required for passport
app.use(session({ secret: 'unicorn' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


app.post('/hegel', function(req, res) {
    
    var hegel = new Hegel();    // create a new instance of the Bear model
    hegel.subject = req.body.subject;  // set the bears name (comes from the request)
    hegel.not = req.body.not;
    hegel.isare = req.body.isare;

    // save the bear and check for errors
    hegel.save(function(err) {
      if (err)
        res.send(err);
      //res.setHeader('Content-Type','application/json');
                  //res.setHeader('Access-Control-Allow-Origin','*');
                  //res.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
                  //res.writeHead(200);
      res.json({ hegelid: hegel._id });
     // res.json({message: "Kevin says:" + req.body.subject});
    
    });
  })
    
  .get(function(req, res){
    Hegel.find(function(err, hegel){
      if (err)
        res.send(err);
        //res.json({ message: 'You are in HEGEL biza !' });
      for (i in hegel){
      res.json(hegel[i]._id);
    };
    });
  
  });




//// routes ==================================================
//require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port); 
console.log('Magic happens on port ' + port);       // shoutout to the user
exports = module.exports = app;             // expose app

*/