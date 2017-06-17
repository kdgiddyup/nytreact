var mongojs = require("mongojs");
var mongoose = require("mongoose");
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;



// Database configuration with mongoose
module.exports = function(app) {
    mongoose.connect("mongodb://localhost/nytreact");
    var db = mongoose.connection;

    // Show any mongoose errors
    db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
    });

    // Once logged in to the db through mongoose, log a success message
    db.once("open", function() {
    console.log("Mongoose connection successful.");
    });
};