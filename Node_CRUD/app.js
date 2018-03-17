// npm packages
const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');

// app imports

// globals
const app = express();

// app config
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); // we are using the express.static middleware and specifying a path for static files to be found (__dirname is a variable that we can use to refer to the directory name of the current module)
app.use(methodOverride('_method')); // ?_method=PATCH

var id = 0;
const items = [{ name: 'Demo', price: '50', id}];
id = 1;

app.get('/', (request, response, next) => {
  return response.redirect('/items');
});
/*
  /items  GET, POST
  /items/:id  GET, DELETE, PATCH
  /items/new  GET => renders a form to create
  /items/:id/edit   GET => renders a form to edit
*/

//*************** app.get('/items' ***********************

app.get('/items', (request, response, next) => {
   // console.log("items is " + items);
   // console.log("request is " + request);
  return response.render('index', { items });
});

//***************** app.post('/items' *********************

//creating an item and pushing it into the arr
app.post('/items', (request, response, next) => {
   //creates and obj, and puts everything in there!!
  //const item = {id, ...request.body};
  console.log("here");
  console.log(request.body);
  const { name, price } = request.body;
  items.push({ name, price, id });
  id++;
 
  // for printing on the console
  console.log("Elements in arr are : ");
  for (i in items) console.log(items[i]);
   
  console.log("request " + request.params);  
  // for (let key in request) console.log(request[key]);  

  return response.redirect('/items');
});

//****************** app.get('/items/new') *********************

app.get('/items/new', (request, response, next) => {
  return response.render('newItem');
});

//**************** app.get('/items/:id/edit') ****************

app.get('/items/:id/edit', (request, response, next) => {
  console.log("request " + request.params);  
  const item = items.find(v => v.id === Number(request.params.id));
  return response.render('edit', {item});
});

//*************** app.patch('/items/:id')********************

app.patch('/items/:id', (request, response, next) => {
  // let item = null;
  // for (i in items){
  //   if(items[i].id === +request.params.id) item = items[i];
  // }
  // item.name = request.body.name;
  // item.price = +request.body.price;
  const item = items.find(item => item.id === +request.params.id);
  item.name = request.body.name;
  item.price = request.body.price;
 
  return response.redirect("/items");
});

//*************** app.delete('/items/:id')********************

app.delete('/items/:id', (request, response, next) => {
  // for (i in items){
  //   if(items[i].id === +request.params.id) items.splice(i,1);
  // }
  const itemIndex = items.findIndex(item => item.id === +request.params.id);
  items.splice(itemIndex, 1);
  return response.redirect("/items"); 
});

//************************************************************

app.listen(3000, () => {
  console.log('Express Templating Server listening on port 3000');
});
