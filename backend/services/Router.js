"use restricted"

// Here the request are being processed
var server = require("./Server");
var controller = require("../controllers/Controler");

var index_path = "C:\\Local\\hamedi\\Programs\\Futurice\\frontend\\index.html";

module.exports = function (app){
  //routing the search queries
  app.route('/search/')
  .get(controller.proceed, server.get_data);
    
  //routing initial connection and returning index.html
  app.route('/')
    .get(function(req, res){
      res.sendFile(index_path);
    })
    
};