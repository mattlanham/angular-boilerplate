var express       = require('express')
    ,app          = express()
    ,cors         = require('cors')
    ,path         = require('path')
    ,logfmt       = require("logfmt")
    ,bodyParser   = require('body-parser')
    ,cookieParser = require('cookie-parser')
    ,fs           = require('fs')
    ,_            = require('underscore');

// Express stuff
app.configure(function() {
    app.use(express.static(__dirname + '/public'));     // set the static files location /public/img will be /img for users
    app.use(express.logger('dev'));                     // log every request to the console
    app.use(bodyParser());                              // pull information from html in POST
    app.use(express.methodOverride());                  // simulate DELETE and PUT
});


// Now listen for connections
var port = Number(process.env.PORT || 3000);
app.listen(port, function() {
    console.log("Listening on " + port);
});
