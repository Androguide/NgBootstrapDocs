// Generated by CoffeeScript 1.7.1
(function() {
  'use strict';
  var app, bodyParser, errorHandler, express, methodOverride, port;

  express = require("express");

  app = express();

  bodyParser = require("body-parser");

  errorHandler = require("errorhandler");

  methodOverride = require("method-override");

  port = parseInt(process.env.PORT, 10) || 4567;

  app.use(express["static"](__dirname + "/app"));

  app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
  }));

  app.listen(port);

  console.log("Server listening on port: " + port);

}).call(this);

//# sourceMappingURL=server.map
