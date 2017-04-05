var mongoose = require('mongoose');
var TVShow = mongoose.model('TVShow');
var jwt    = require('jsonwebtoken');
var config = require('../config');

exports.GetToken = function(req, res){
    TVShow.findOne({'title':req.body.title}, function(err, obj){
        console.log('err'+err);
        console.log('obj'+obj);
        if(obj){
            var token = jwt.sign(obj, config.secret, {
                expiresIn : 1440 // expires in 24 hours
            });
            res.send(200, token);
        }
            res.send(200, "usuario no encontrado");

    });
}