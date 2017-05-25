var express = require('express');
var router = express.Router();
module.exports = router;

var itemController = require('../controllers/items');

router.route('/app/post_item')
  .post(itemController.postItem);

router.route('/app/get_items/:category')
  .get(itemController.getItems);

router.route('/app/post_category')
    .post(itemController.postCategory);

router.route('/app/get_categories')
  .get(itemController.getCategories);
