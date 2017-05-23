 var heros = require('../models/heros');
 var _ = require('lodash');
 module.exports = {
     query: function(req, res, next) {
         res.send(200, heros);
         return next();
     },
     querybyid: function(req, res, next) {
         var id = req.params.id;
         var find = _.find(heros, function(o) {
             return o.id == +id;
         })
         console.log(id, find);
         if (find) {
             res.send(200, find);
         } else {
             res.send(404, { err: 'none' });
         }
         return next();
     }

 }