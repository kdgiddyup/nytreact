var express = require("express");

// set Article to use our mongoose Article schema
var Article = require("../models/Article");

module.exports = function(app) {
  
  
  // some sample routes from previous exercises

  // Routes to add:

  /*

  * `/api/saved` (get) -  components will use this to query MongoDB for all saved articles

* `/api/saved` (post) - components will use this to save an article to the database

* `/api/saved` (delete) -  components will use this to delete a saved article in the database


*/
// ======

// TO DO: revise these to use article methods we need (above) as these are c/p from quotes app:

var Article = require("../models/article");

module.exports = {
  // This method handles retrieving quotes from the db
  index: function(req, res) {
    var query;
    if (req.query) {
      query = req.query;
    }
    else {
      query = req.params.id ? { _id: req.params.id } : {};
    }
    Quote.find(query)
      .then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
  },
  // This method handles creating new quotes
  create: function(req, res) {
    Quote.create(req.body).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method handles updating quotes
  update: function(req, res) {
    Quote.update({
      _id: req.params.id
    },
      req.body
    ).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method handles deleting quotes
  destroy: function(req, res) {
    Quote.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};

// api/saved
app.get("/api/saved", function(req,res){
  
})
// Handle form submission, save submission to mongo
app.post("/submit", function(req, res) {
  console.log(req.body);
  // Insert the note into the notes collection
  db.notes.insert(req.body, function(error, saved) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    // Otherwise, send the note back to the browser
    // This will fire off the success function of the ajax request
    else {
      res.send(saved);
    }
  });
});

// Retrieve results from mongo
app.get("/all", function(req, res) {
  // Find all notes in the notes collection
  db.notes.find({}, function(error, found) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    // Otherwise, send json of the notes back to user
    // This will fire off the success function of the ajax request
    else {
      res.json(found);
    }
  });
});

// Select just one note by an id
app.get("/find/:id", function(req, res) {

  // When searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IDYOUWANTTOFIND))

  // Find just one result in the notes collection
  db.notes.findOne({
    // Using the id in the url
    "_id": mongojs.ObjectId(req.params.id)
  }, function(error, found) {
    // log any errors
    if (error) {
      console.log(error);
      res.send(error);
    }
    // Otherwise, send the note to the browser
    // This will fire off the success function of the ajax request
    else {
      console.log(found);
      res.send(found);
    }
  });
});


// Update just one note by an id
app.post("/update/:id", function(req, res) {
  
  // When searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IDYOUWANTTOFIND))

  // Update the note that matches the object id
  db.notes.update({
    "_id": mongojs.ObjectId(req.params.id)
  }, {
    // Set the title, note and modified parameters
    // sent in the req's body.
    $set: {
      "title": req.body.title,
      "note": req.body.note,
      "modified": Date.now()
    }
  }, function(error, edited) {
    // Log any errors from mongojs
    if (error) {
      console.log(error);
      res.send(error);
    }
    // Otherwise, send the mongojs response to the browser
    // This will fire off the success function of the ajax request
    else {
      console.log(edited);
      res.send(edited);
    }
  });
});


// Delete One from the DB
app.get("/delete/:id", function(req, res) {
  // Remove a note using the objectID
  db.notes.remove({
    "_id": mongojs.ObjectID(req.params.id)
  }, function(error, removed) {
    // Log any errors from mongojs
    if (error) {
      console.log(error);
      res.send(error);
    }
    // Otherwise, send the mongojs response to the browser
    // This will fire off the success function of the ajax request
    else {
      console.log(removed);
      res.send(removed);
    }
  });
});


// Clear the DB
app.get("/clearall", function(req, res) {
  // Remove every note from the notes collection
  db.notes.remove({}, function(error, response) {
    // Log any errors to the console
    if (error) {
      console.log(error);
      res.send(error);
    }
    // Otherwise, send the mongojs response to the browser
    // This will fire off the success function of the ajax request
    else {
      console.log(response);
      res.send(response);
    }
  });
});

};
