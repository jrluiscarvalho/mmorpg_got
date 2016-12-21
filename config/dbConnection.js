/* importar o MongoDB */
var mongo = require('mongodb');

var connMongoDB = function(){
    var db = new mongo.Db(
        'got',
        new mongo.Server(
            //'mongodb://jrluiscarvalho:lu15jun10r@mlab@ds141108.mlab.com',
            localhost,
            //41108,
            27017,
            {}
        ),
        {}
    );
    return db;
    
    
    /*var MongoClient = mongo.MongoClient;
    var url = 'mongodb://jrluiscarvalho:lu15jun10r@ds141108.mlab.com:41108/got';

    MongoClient.connect(url, function(err, db){
        if(err){
            console.log('Unable to connect: ', err);
        }else{
            console.log('Connection established to ', url);
        }

        db.close();
    });

    return MongoClient;*/
}

module.exports = function(){
    return connMongoDB;
}