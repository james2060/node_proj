var express = require('express');
var router = express.Router();
//const mongoose = require('mongoose');

/*
const todoSchema = new mongoose.Schema(
  {
    todoid: { type: Number, required: true, unique: true },
    content: { type: String, required: true },
    completed: { type: String, default: false }
  },
  {
    timestamps: true
  }
);
*/

// << db setup >>
const db = require("../db/db");
const dbName = "sample_airbnb";
const collectionName = "listingsAndReviews";



function cveSearchAPI(req, res, next) {

  db.initialize(dbName, collectionName, function (dbCollection) { // successCallback
      // get all items
      /*dbCollection.find().toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
  
        // << return response to client >>
      });*/
  
    const search = req.body.search;

    console.log(search.type)
    console.log(search.keyword)
    console.log(search.beds)

    dbCollection.findOne({ beds: search.beds }, (error, result) => {
      if (error) throw error;
      // return item
      console.log(result.listing_url)
      res.status(200).json(result)

  });

});

};


module.exports = {
    cveSearchAPI: cveSearchAPI,
}
