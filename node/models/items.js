// Load the required packages
var mongoose = require('mongoose');

// Define the structure of item schema
var itemSchema = new mongoose.Schema({
  name        : {type : String},
  price       : {type : Number},
  category    : {type : Number}
});

//exporting the model
module.exports = mongoose.model('Item',itemSchema);
