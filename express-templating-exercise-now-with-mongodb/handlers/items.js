const { Item } = require('../models');

//saving new item in
function createItem(request, response, next) {
  const newItem = new Item(request.body); // new Item({ name: 'foo', price: '50' })
  return newItem // db.items.insert({ name: 'foo', price: '50' })
    .save()
    .then(() => {
      return response.redirect('/items');
    })
    .catch((err) => {
      console.error(err);
    });
}

//get all the items
function getItems(request, response, next) {
  return Item.find()  // db.items.find()
    .then((items) => {
      return response.render('index', { items });
    })
    .catch(err => {
      console.error(err);
    });
}

//get a single item
function getItem(request, response, next) {
  return Item.findById(request.params.id)
    .then(item => {
      return response.render("show", { item });
    })
    .catch(err => {
      console.error(err);
    });
  // const item = items.find(item => item.id === +request.params.id);
  // return response.render('show', { item });
}

function updateItem(request, response, next) {
  return Item.findByIdAndUpdate(request.params.id, { $set: { name: request.body.name, 
                                                            price: request.body.price }})
    .then(()=> {
      //console.log(items)
      return response.redirect('/items');
    })
    .catch(err => {
      console.error(err);
    });
}

function deleteItem(request, response, next) {
 Item.findByIdAndRemove(request.params.id)
   .then(()=>{
      return response.redirect('/items');
   })
   .catch(err => {
      console.error(err);
  }); 
}

function renderNewItemForm(request, response, next) {
  return response.render('new');
}

function editItemForm(request, response, next) {
  return Item.findById(request.params.id)
    .then(item => {
      return response.render("edit", { item });
    })
    .catch(err => {
      console.error(err);
    });
}

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
  renderNewItemForm,
  editItemForm
};
