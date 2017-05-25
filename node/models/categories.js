// Load the required packages
var mongoose = require('mongoose');

// Define the structure of item schema
var categorySchema = new mongoose.Schema({
  name        : {type : String},
  category    : {type : Number}
});

//exporting the model
module.exports = mongoose.model('Category',categorySchema);
