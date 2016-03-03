//NPM Packages
var express         = require('express');
var cors            = require('cors');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var morgan          = require('morgan');
var mongoose        = require("mongoose");

//Linked files
var app             = express();
var config          = require("./db/config")
var routes          = require('./config/routes');
var Programme       = require("./models/programme")

//Server setup
var http            = require('http');
var server          = http.createServer(app);
var port            = process.env.PORT || 3000;

//Setup Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === "object" && "_method" in req.body){
    var method = req.body._method;
    delete req.body._method;
    return method; 
  }
}));

app.use(routes);

// Setup static files form public folder
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
})

//Start server
server.listen(port);
console.log('Server started on ' + port);