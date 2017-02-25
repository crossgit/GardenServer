 var heros = require('../models/heros');

 module.exports = {
     query: function(req, res, next) {
         res.send(200, heros);
         return next();
     }
 }