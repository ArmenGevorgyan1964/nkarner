var Http = require('http');
var app = require('./app');
Http.createServer(app.handleAllRequests).listen(8000);
