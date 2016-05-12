'use strict';

var request = require('request');

exports = module.exports = function(app) {
 
  app.get('/api/sed/', function(req, res) {
    // URL
    var url = 'https://aed.azure-mobile.net/api/aedinfo/%E9%B9%BF%E5%85%90%E5%B3%B6%E7%9C%8C/';
    //'https://aed.azure-mobile.net/api/aedinfo/%E7%A6%8F%E4%BA%95%E7%9C%8C/';

    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var send_data = body;
        res.jsonp(send_data);
      } else {
        console.log('error: '+ response.statusCode);
      }
    })
  });
};