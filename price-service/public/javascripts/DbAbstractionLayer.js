var mongodb = require('mongodb');

var connected = false;
var db = null;

mongodb.MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }).then(connection => {
    connected = true;
    db = connection.db('market');
    console.log("DB connection successful");
}).catch(error => {
    console.log("Error in connecting to DB");
});

function queryPrice() {
    if (connected) {
        // get data from db
    } else {
        return null;
    }
}