const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  price: String
});  // the blueprint

const Item = mongoose.model('Item', itemSchema);  // instance w/methods
module.exports = Item;