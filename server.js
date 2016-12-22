var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3001;
var config = require('./config');


// define route files
var messageRouter = require('./routes/messageRoutes')();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Necessary for Let's Encrypt Certificate
app.use('/.well-known', express.static('.well-known'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,DELETE,PUT,POST,PATCH,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});

app.use('/message', messageRouter);


app.listen(port, function() {
  console.log("API listening on port: ", port);
});

// Error Handling
app.use(function(err, req, res, next) {
  console.log("========= ERROR ================");
  console.log(err.stack);
  res.status(err.status || 500).json({ message: err.message, error: err });
}); 


module.exports = app;