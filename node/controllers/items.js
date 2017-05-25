var Items = require('../models/items');
var Categories = require('../models/categories');
var customHandlers = require('./custom_handlers');

// Adding an item
exports.postItem = function(req, res) {
    var item = new Items({
      name : req.body.name,
      price : req.body.price,
      category : req.body.category
    });

    item.save(function(err, response) {
        if (err) {
            res.send(customHandlers.failureResponse(err));
        }
        res.json(customHandlers.successResponse(response));
    });
}

// Getting items of selected category
exports.getItems = function(req, res){
  var category = req.params.category;
  Items.find({category : category}, function(err, items){
    if(err){
      res.json(customHandlers.failureResponse(err));
    }
    res.json(customHandlers.successResponse(items));
  });
}

// Adding a category
exports.postCategory = function(req, res) {
    var category = new Categories({
      name : req.body.name,
      category : req.body.category
    });

    category.save(function(err, response) {
        if (err) {
            res.send(customHandlers.failureResponse(err));
        }
        res.json(customHandlers.successResponse(response));
    });
}

// Getting the categories
exports.getCategories = function(req, res){
  Categories.find({}, function(err, categories){
    if(err){
      res.json(customHandlers.failureResponse(err));
    }
    res.json(customHandlers.successResponse(categories));
  });
}
