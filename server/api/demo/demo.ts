'use strict';

exports = module.exports = function(app) {
  var json = require('./sed.json');
 
  app.get('/api/sed/', function(req, res) {
    res.jsonp(json)
  });
};