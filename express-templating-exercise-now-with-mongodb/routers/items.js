const express = require('express');
// app imports
const { itemsHandler } = require('../handlers');
// globals
const router = express.Router();
/*
  /items  GET, POST ^^
  /items/new  GET => renders a form to create ^
  /items/:id  GET, DELETE, PATCH
  /items/:id/edit   GET => renders a form to edit ^
*/
router
  .route('')
    .get(itemsHandler.getItems)
    .post(itemsHandler.createItem);
    
router
  .route('/new')
    .get(itemsHandler.renderNewItemForm);

router
  .route('/:id')
    .get(itemsHandler.getItem)
    .patch(itemsHandler.updateItem)
    .delete(itemsHandler.deleteItem);


router
  .route('/:id/edit')
    .get(itemsHandler.editItemForm);

module.exports = router;
