//THIS IS HOW YOU DISPLAY/PRINT ANY OBJ WITH THE CONTENT INSIDE!!
//alert(user.toSource());
console.dir(ANYobject);

// Let's try to write a function called each which accepts two parameters: an array and a callback function. The each function should loop over the array passed to it and run the callback function on each element in it.

function each(arr, fn){
  return fn();//YOU HAVE TO CALL THE FUNCTION HERE W ()!!!!
}

arr = [2,3,4];
// each(arr, function(){
//   for(let i=0; i<arr.length; i++)
//     {console.log(arr[i]);}
// });

// function sendMessage(str, fn){
//   return fn;
// }
// function sendMessage(message, fn){
//     return fn(message);
// }

// sendMessage("Hello World", function(message){
//     console.log(message + " from a callback function!");
// });
//********************************************************
//Write a function called map which accepts two parameters: an array and a callback. The map function should return a new array with the result of each value being passed to the callback function. Here's an example:
function map(arr, fn){
  let result = [];
  for(let i=0; i<arr.length; i++){
    result.push(fn(arr[i]));
  }
  return result;
} // [2,4,6,8]


// map([1,2,3,4], function(val){
//     return val * 2;
// }); // [2,4,6,8]
//******************************************************
//3.Write a function called reject which accepts two parameters an array and a callback. The function should return a new array with all of the values that do not return true to the callback. Here are two examples:

function reject(arr, fn){
  result = [];
  for(let i=0; i<arr.length; i++){
    if (fn(arr[i]) === false) result.push(arr[i]);
   }
   return result;
}


// reject([1,2,3,4], function(val){
//     return val > 2;
// }); // [1,2]

// reject([2,3,4,5], function(val){
//     return val % 2 === 0;
// }); // [3,5]

//**************************************************************************
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

// alert( userName ); // John before the function call

// showMessage();

// alert( userName ); // Bob, the value was modified by the function
//***************************************************************************
function showMessage(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  alert( from + ': ' + text );
}

// let from = "Ann";

// showMessage(from, "Hello"); // *Ann*: Hello

// // the value of "from" is the same, the function modified a local copy
// alert( from ); // Ann
//
//*************************************************************************
//sum(3,4);
//Function Expression
function sum(a, b) {
  return a + b;
}
//*************************************************************************
//An example with a constructor:
// constructor function returns a new object
function User(name) {
  // the object method is created as a nested function
  this.sayHi = function() {
    alert(name);
  };
}

let user = new User("John");
//user.sayHi(); // the method code has access to the outer "name"
//*************************************************************************
//An example with returning a function:
function makeCounter() {
  let count = 0;

  return function() {
    //count = 1;
    return count++; // has access to the outer counter
  };
}

let counter = makeCounter();
// alert(count);
// alert( counter() ); // 0
// alert( counter() ); // 1
// alert( counter() ); // 2
//*************************************************************************
function sayHi() {
  alert("Hi");

  // let's count how many times we run
  sayHi.count++;
}
sayHi.count = 0; // initial value

// sayHi(); // Hi
// sayHi(); // Hi

// alert( `Called ${sayHi.count} times` ); // Called 2 times
//*************************************************************************
let sayH = function viki(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    sayH("Guest"); // use func to re-call itself
  }
};

//sayH(); // Hello, Guest

// But this won't work:
//func(); // Error, func is not defined (not visible outside of the function)
//*************************************************************************
let sayHii = function(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    sayHii("Guest"); // Error: sayHi is not a function
  }
};

let welcome = sayHii;
sayHii = null;

//welcome(); // Error, the nested sayHi call doesn't work any more!
//*************************************************************************
let worker = {
  slow(min, max) {
    alert(`Called with ${min},${max}`);
    return min + max;
  }
};

//alert(worker.slow(2,3));
//
let userr = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

// let f = user.sayHi;
// setTimeout(f, 1000); // lost user context
//setTimeout(userr.sayHi, 1000); // Hello, undefined!
//****************************************************************************
let usery = {
  name: "John",
  age: 30,
  //2 diff ways of declaring function inside an obj
  dir: function() {
    alert("Hello!");
  },
  //or just with a name
  funNAme(){
    alert("hi!");
  },
};
alert(usery.dir()); // Hello!
//*****************************************************************
//To access the object, a method can use the this keyword.
let userNamee = {
  name: "John",
  age: 30,

  sayHi() {
    alert(this.name);
  }
};
//user.sayNamee(); // John

//OR without 'this', userNamee instead..
let userN = {
  name: "John",
  age: 30,

  sayHi() {
    alert(userN.name);
  }
};
//But such code is unreliable. If we decide to copy user to another variable, e.g.
 //admin = user and overwrite user with something else, then it will access the
 //wrong object.If we used this.name instead of user.name inside the alert, then
 //the code would work.

 let user = {
   name: "John",
   age: 30,

   sayHi() {
     alert( user.name ); // leads to an error
   }

 };

 let admin = user;
 user = null; // overwrite to make things obvious

//error inside sayHi(), the old name is used!!!
//If we used this.name instead of user.name inside the alert, then
//the code would work.
 admin.sayHi(); // Whoops! inside sayHi(), the old name is used! error!

//*****************************************************************

//In JavaScript, “this” keyword behaves unlike most other programming languages.
// First, it can be used in any function.For instance, the same function may
//have different “this” when called from different objects:

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

//!!!!!THIS IS HOW TO ASSIGN A FUNCTION TO THE OBJECT!!!!!
// use the same functions in two objects
user.f = sayHi;
admin.f = sayHi;

//THIS IS HOW YOU DISPLAY/PRINT ANY OBJ WITH THE CONTENT INSIDE!!
//alert(user.toSource());
console.dir(admin);
console.dir(user);

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

//*****************************************************************

//Actually, we can call the function without an object at all, DESPITE THE 'this'
// keyword in it:
function sayHi() {
  alert(this);
}

sayHi(); // undefined

//In this case 'this' is undefined in strict mode. If we try to access this.name,
//there will be an error!!

//In non-strict mode (if one forgets use strict) the value of this in such case
//will be the global object (window in a browser, we’ll get to it later).
//This is a historical behavior that "use strict" fixes.

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Please note that usually a call of a function that uses this without an object
// is not normal, but rather a programming mistake. If a function has this, then
// it is usually meant to be called in the context of an object.

If you come from another programming language, then you are probably used to the
idea of a "bound this", where methods defined in an object always have this
referencing that object.

In JavaScript this is “free”, its value is evaluated at call-time and does not
depend on where the method was declared, but rather on what’s the object “before
 the dot”.

The concept of run-time evaluated this has both pluses and minuses. On the one
hand, a function can be reused for different objects. On the other hand, greater
flexibility opens a place for mistakes.

//*****************************************************************

//So, how does the information about this gets passed from the first part to the
//second one?

let user = {
  name: "John",
  hi() { alert(this.name); }
}

// split getting and calling the method in two lines
let hi = user.hi;
hi(); // Error, because this is undefined

//Here hi = user.hi puts the function into the variable, and then on the last line it is completely standalone, and so there’s no this.

To make user.hi() calls work, JavaScript uses a trick – the dot '.' returns not
a function, but a value of the special Reference Type.
The Reference Type is a “specification type”. We can’t explicitly use it, but it
is used internally by the language.
The value of Reference Type is a three-value combination (base, name, strict),
where:

base is the object.
name is the property.
strict is true if use strict is in effect.
The result of a property access user.hi is not a function, but a value of
Reference Type. For user.hi in strict mode it is:

// Reference Type value
(user, "hi", true)

When parentheses () are called on the Reference Type, they receive the full
information about the object and it’s method, and can set the right this
(=user in this case).

Any other operation like assignment hi = user.hi discards the reference type as
a whole, takes the value of user.hi (a function) and passes it on. So any
further operation “loses” this.

So, as the result, the value of this is only passed the right way if the
function is called directly using a dot obj.method() or square brackets
obj[method]() syntax (they do the same here).
