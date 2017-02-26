 var house = require('../models/house');

 module.exports = {
     query: function(req, res, next) {
         res.send(200, house);
         return next();
     }
 }