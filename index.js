var restify = require('restify');
var mongoose = require('mongoose');
var config = require('./config');
var server = restify.createServer();
 var TVShowModel = require("./models/tvshow");
var TVShowCtrl = require('./Controllers/tvshows');

console.log(config.port);


server.get('/', function(){
    console.log('exito');
})

server.post('/', function(req,res){
    res.send(200,'hola');
    console.log('exito post');
})

server.use(restify.bodyParser());

server.get('/tvshows/', TVShowCtrl.findAllTVShows);

server.post('/tvshows/', TVShowCtrl.addTVShow);

server.del('/tvshows/:id', TVShowCtrl.deleteTVShow);
server.get('/tvshows/:id',TVShowCtrl.findById);

mongoose.connect('mongodb://localhost/tvshows',function(err, res){
    if(err){
        console.log('error' + err);
    }
    else{
        server.listen(3000, function(err, res){
            console.log("Node server running on http://localhost:3000");
        });
        
    }
})




