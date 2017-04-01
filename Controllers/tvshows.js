var mongoose = require('mongoose');
var TVShow = mongoose.model('TVShow');

exports.findAllTVShows = function (req, res){
    TVShow.find(function(err, tvshows){
        if(err) res.send(500, err.message);
        res.send(200, tvshows);
    });
};

exports.addTVShow = function(req, res){
    console.log(req.body);
    var tvshow = new TVShow({
        title : req.body.title,
        year: req.body.year,
        genre: req.body.genre
    });

    tvshow.save(function(err, tvshow){
        if(err) return res.status(500).send(err.message);
        res.send(200, tvshow);
    });
};

exports.findById = function (req, res){
    TVShow.findById(req.params.id).then(function(response){
       res.send(200, response); 
    }, function(error){
        res.send(505, error); 
    });
    
};

exports.deleteTVShow = function(req, res) {  
    TVShow.findById(req.params.id, function(err, tvshow) {
        tvshow.remove(function(err) {
            if(err) {
                return res.status(500).send(err.message);
            }
            else{
                res.send(200, 'eliminado');
            }
        })
    });
  
};