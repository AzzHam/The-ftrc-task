// This is the contact point to outer world

var express = require('express'),
    app = express(),
    port = 3000;

//var Server = require("./services/Server")
var router = require("./services/Router")

app.use(express.static("frontend"));


router(app);

app.listen(port);
console.log('The server starts on local host and port: ' + port);


