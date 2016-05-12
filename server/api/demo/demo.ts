'use strict';

exports = module.exports = function(app) {
  const json = require('./sed.json');
 
  app.get('/api/sed/', (req, res) => {
    res.jsonp(json)
  });
};