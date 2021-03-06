//git clean same as rm, when u still havent add the new file
//Git is a Version Control System. 
//GitHub is an online platform for hosting and sharing code, 
//text files and even more complex file formats.

//1.Write a function called rangeInArray which accepts an array and start and end indices,  and returns
//the sum of the values between (and including) the start and end index. 
//If a start parameter is not passed in, it should default to zero. If an end parameter is not passed in, 
//it should default to the last value in the array. Also, if the end argument is too large, the sum should 
//still go through the end of the array.

function rangeInArray(arr, num1=0, num2=arr[arr.length-1]){
 if (num2 > arr.length-1) num2 = arr.length-1;
  var sum = 0;
  for (var i=num1; i <= num2; i++){
    sum += arr[i];  
  }
  return sum;
}

//2.Write a function called sameFrequency which accepts two numbers and returns true if they contain the
// same frequency of digits. Otherwise, it returns false.

//my solution
function sameFrequency(num1, num2){
  n1 = num1.toString().split("");
  n2 = num2.toString().split("");
  n1 = n1.sort(function(a, b){return a-b});
  n2 = n2.sort(function(a, b){return a-b});

  return parseInt(n1.join("")) === parseInt(n2.join(""));
}

//sameFrequency(551122,221515) // true
//sameFrequency(321142,3212215) // false
//sameFrequency(1212, 2211)// true

//their solution

function sameFrequency(num1,num2){
  var o1 = buildFrequency(num1)
  var o2 = buildFrequency(num2);
  for(var key in o1){
    if(!o2.hasOwnProperty(key)) return false
    if(o2[key] !== o1[key]) return false
  }
  return true
}

function buildFrequency(val){
  var obj = {};
  var str = val.toString();
  for(var i = 0; i < str.length; i++){
    obj[str[i]] = (obj[str[i]] || 1) + 1
  }
  return obj;
}

//3.Write a function called take which accepts an array and an optional value and creates a copy of the
//array starting from the beginning for the value number of elements. If a value is not passed the 
//function should return an array with the first element. If the second parameter is greater than the 
//ength of the array, return a copy of the entire array.

//my solution

function take(arr, el=1){
  if (el >= arr.length) el = arr.length;
  var result = [];
  for (var i = 0; i < el; i++){
    result.push(arr[i]);
  }
  return result;
}

// take([1, 2, 3]) // [1]
// take([1, 2, 3], 2) // [1, 2]
// take([1, 2, 3], 5) // [1, 2, 3]
// take([1, 2, 3], 0) // []

//GREAT SOLUTION!! their soution!!
function take(arr, n){
    if(n === 0){
        return [];
    }
    if(n >= arr.length){
        return arr.slice()
    }
    if(n < arr.length){
        return arr.slice(0,n)
    }
    return arr.slice(0,1)
}

//5.Write a function called includes which accepts a collection, a value, and an optional starting index. 
//he function should return true if the value exists in the collection when we search starting from the 
//starting index. Otherwise, it should return false.

//The collection can be a string, an array, or an object. If the collection is a string or array, the third
// parameter is a starting index for where to search from. If the collection is an object, the function 
//searches for the value among values in the object; since objects have no sort order, the third parameter
//is ignored.

function includes(collection, value, optionalIndex){
  if (Array.isArray(collection) || typeof collection === 'string'){
      return  valueCheck(collection, value, optionalIndex);
  }
  if (typeof collection == 'object'){
    for (var key in collection){
      if (collection[key] === value) return true;
    }
    return false;
  }
}

function valueCheck(coll, val, optIndx=0){
  for (var i=optIndx; i < coll.length; i++){
    if (coll[i] === val) return true;
  }
  return false;
}

//their solution
//look at the use of indexOf and slice mrthod in the second part!!

function includes(item,val,startIdx){

  if(!Array.isArray(item) && typeof item !== 'string') {
    for(var key in item) {
      if(val === item[key]) {
        return true
      }
    }
    return false;
  }

  if(startIdx === undefined) {
    return item.indexOf(val) > -1
  }

  return item.slice(startIdx).indexOf(val) > -1
}

//ncludes([1, 2, 3], 1, 2) // false 
//includes({ 'a': 1, 'b': 2 }, 1) // true 
//includes({ 'a': 1, 'b': 2 }, 'a') // false
//includes('abcd', 'b') // true
//includes('abcd', 'e') // false

//7.Write a function called forEach, which accepts an array and a callback. forEach should iterate
// through the array and run a callback function for each value in the array. The callback function
// should accept as its first argument the current array element, and as its second element the 
//current array index. Also, forEach should always return undefined.

function forEach(arr, callback){
  for (var i=0; i<arr.length; i++){
    callback(arr[i], i);
  }
  return undefined;
}

// var emptyArr = []
// forEach([1,2,3,4], function(val){
//   emptyArr.push(val*10);
// });
// emptyArr; // [10,20,30,40]

// var arr = [1,2,3];
// forEach(arr, function(val, idx){
//   arr[idx] += 5;
// });
// arr; // [6,7,8]

// var isUndefined = forEach(["a","b","c"], function(){
//   return "hi";
// });
// isUndefined; // undefined

//REVERSE ARRAY using DESTRUCTURING from ES2015!!
//soooo COOL!!!!
function reverseArray(arr){
	for (var i=0; i < arr.length/2; i++){
		[arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]];
	}
	return arr;
}

//8.Write a function called filter which accepts an array and a callback. The function 
//should return a new array consisting of elements from the original array that return 
//truthy values when passed into the callback. Also, the original array should not be 
//affected.

function filter(arr, callback){
  var newArr = [];
  for (let i=0; i<arr.length; i++){
    if (callback(arr[i])) newArr.push(arr[i]);
  }
  return newArr;
}

//9.Write a function called map which accepts an array and a callback. The function 
//should iterate over the array passed to the function and return a new array, whose 
//values are determined by the return values from the callback. For each iteration, the 
//callback should accept the current value, current index and the entire original array 
//as its arguments.

//Since map returns a new array, it should not mutate the original array passed into it.

function map(arr, callback){
  newArr = [];
  for (let i=0; i<arr.length; i++){
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
}

//10.Write a function called some which accepts an array and a callback. Some should 
//return true if the result of the callback at any value is truthy; otherwise it should 
//return false. The callback accepts as its arguments the current array element, the current
// array index, and the entire array.

//Some should not mutate the input array.

function some(arr, callback){
  for (let i=0; i < arr.length; i++){
    if (callback(arr[i], i, arr))  
      return true;
  }
  return false;
}

//12.Write a function called inRange, which takes in number n, start, and end, and checks if
// n is between start and up to, but not including, end. If end is not specified, it's set to 
//start with start then set to 0. If start is greater than end the params are swapped.


function inRange(num,start,end){
  if(arguments.length === 2){
    end = arguments[1]
    start = 0
  }
  if (end < start)  [start, end] = [end, start];
   
  return num >= start && num < end;
}

//13.Write a function called every which accepts an array and a callback. Every should return 
//true if the result of the callback at each value is truthy; otherwise it should return false. 
//The callback accepts as its arguments the current array element, the current array index, and 
//the entire array.

//Every should not mutate the input array.

function every(array, callback){
  for (let i = 0; i < arr.length; i++){
    if (!callback(arr[i], i, arr)) return false;
  }
  return true;
}

//14.Write a function called repeat, which accepts a string and a number and returns a new string 
//with the string passed to the function repeated the number amount of times. Do not use the built 
//in repeat method!

function repeat(str, num){
  newStr = "";
  for (let i=0; i < num; i++){
    newStr += str;
  }
  return newStr;
}

//their solution using concat

function repeat(str, num){
  if(num === 0) {
    return ''
  }
  var newStr = ''
  for(var i = 0; i < num; i++){
    newStr = newStr.concat(str);
  }
  return newStr;
}

//15. Write a function called padEnd, which accepts a string and a number and pads the string on the 
//right side if it's shorter than the length. By default, it will pad the string with whitespace. 
//However, you can also provide a third argument to padEnd which will specify how it should pad the 
//output string.

//Padding characters are truncated if there's not enough padding, and are repeated if there's too much 
//adding.

//If the number is less than the input string length, no padding or truncation occurs; instead, the 
//original string is simply returned.


function padEnd(str,num, pad){
  if (num < str.length) return str;
  if (str.length < num){
    if (arguments.length === 3){
      let diff = Math.ceil((num-str.length)/pad.length);
      for (let i = 0; i < diff; i++){
          str += pad;
      }
    }
    else if ( arguments.length === 2) {
      let diff2 = num-str.length;
      for (let k = 0; k < diff2; k++){
         str += " ";
      }
    }
  }
  
  if (str.length > num) str = str.slice(0,num);
  return str;
}

//their solution

function padEnd(str, num, char){
    if(str.length >= num){
        return str;
    }

    var newStr = '';
    if(char === undefined){
        for(var i = 0; i < num-str.length; i++){
            newStr += ' ';
        }
        return str.concat(newStr);
    }

    for(var i = 0; i < num-str.length; i++){
        newStr += char[i % char.length];
    }
    return str.concat(newStr);
}

//16. Write a function called drop which accepts an array and optional number and returns a new array with 
//the number  of elements dropped from the beginning. If the number is greater than the length of the array,
// return an empty array and if there is no second parameter, return a slice starting from the first index 
//to the end of the array.

//Since drop returns a new array, it should not mutate the original array.

function drop(arr, num){
  if (num > arr.length) return [];
  else if (arguments.length === 1) return arr.slice(1);
  else return arr.slice(num);
}

//their solution
function drop(arr,num){
    if(num === undefined){
        return arr.slice(1);
    }
    return arr.slice(num);
}

//17.Write a function called tap, which accepts an array and a callback. The callback should be invoked on
// the array and then the returned value should be the array regardless of what the callback returns.

function tap(arr, callback){
  callback(arr);  
  return arr;
}

//their solution with 'cb' named fn
function tap(value, cb){
  cb(value)
  return value;
}

//18.Write a function called findIndex, which accepts an array and a callback. The function should return 
//the index where the callback first returns a truthy value. If the callback never returns a truthy value,
// findIndex should return -1.

function findIndex(arr, cb){
  for (let i=0; i<arr.length; i++){
    if (cb(arr[i])) return i;
  }
  return -1;
}

//19.Write a function called linearSearch which accepts an array and a value, and returns the index at which
// the value exists. If the value does not exist in the array, return -1.

function linearSearch(arr, value){
  for (let i=0; i<arr.length; i++){
    if(value === arr[i]) return i;
  }
  return -1;
}

//20.Write a function called head which returns the first element of the input array.

function head(arr){
  return arr[0];
}

//21.Write a function called isNil, which should return true if the input is `null` or `undefined`.

function isNil(value){
  if (value === null || value === undefined) return true;
  return false;
}

//their solution
function isNil(num){
  return num == null;
}

//******************************************************

//22.Write a function called isOddString which returns true if sum of each character's
// position in the alphabet is odd. For example, "a" is in the first position, "b" is 
//in the second position, and so on. If the sum is even, return false.

function isOddString(str){
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let sum = 0;
  for(let i=0; i<str.length; i++){
    sum += alphabet.indexOf(str[i])+1;
  }
  return sum % 2 === 1;
}

//their solution

function isOddString(str){
  var lower = str.toLowerCase();
  var total = 0;
  for(var i = 0; i < lower.length; i++){
    total += lower[i].charCodeAt(0) - 96
  }
  return total % 2 === 1
}

//23.Write a function called pick, which accepts an object and an array of keys and 
//returns a new object with all of the keys that are in the array passed to pick. 
//If an array element doesn't correspond to a valid key, the element is simply ignored.

function pick(obj, arr){
  newObj = {};
  for (let i=0; i<arr.length; i++){
    if (arr[i] in obj) newObj[arr[i]] = obj[arr[i]];
  }
  return newObj;
}

//their solution with hasOwnProperty
function pick(obj, arr){
  var newObj = {};
  for(var i = 0; i < arr.length; i++){
    if (obj.hasOwnProperty(arr[i])) {
      newObj[arr[i]] = obj[arr[i]]
    }
  }
  return newObj;
}

//24.Write a function called flatten, which flattens an array a single level deep. 
//In other words, if you have one levels of nesting in your arrays, it will remove 
//one level of nesting.


function flatten(arr){
  newArr = [];
  for (let i=0; i < arr.length; i++){
    if (Array.isArray(arr[i])){
      for (let j=0; j < arr[i].length; j++){
        newArr.push(arr[i][j]);
      }
    }
    else{
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//their solution with concat instead of a for loop(thats what concat does under the hood!!)

function flatten(arr){
    var newArr = [];
    for(var i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            newArr = newArr.concat(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//25.Write a function called clamp, which accepts three parameters: a number, a lower bound,
// and an upper bound. The function should return the number if it is in between the lower 
//and upper bounds. Otherwise, the function should return lower if number is less than lower, 
//or upper if number is greater than upper.

function clamp(num, lower, upper){
  if (num >= lower && num <= upper) return num;
  else if (num < lower) return lower;
  else return upper;
}

//their solution

function clamp(num, lower, upper) {
  return Math.min(Math.max(num, lower), upper);
}

//26. Write a function called find which accepts an array and a callback. The function should
// return the first value for which the callback returns a truthy value. If the callback never
// returns a truthy value, the function should return undefined.

function find(arr, callback){
  for (let i=0; i<arr.length; i++){
    if (callback(arr[i], i, arr)) return arr[i];
  }
  return undefined;
}

//their solution..fn automatically returns undefined!!
function find(arr,callback){
  for(var i = 0; i < arr.length; i++){
    if(callback(arr[i],i,arr)){
      return arr[i]
    }
  }
}

//27.Write a function called omit, which accepts an object and an array of keys and returns a new
// object with the keys from the array omitted. If an array element doesn't correspond to a valid
// key, the element is simply ignored.

function omit(obj, arr){
  let newObj={};
  for (let key in obj){
    if (!arr.includes(key)) newObj[key] = obj[key];
  }
  
  return newObj;
}

//their solution
function omit(obj, keysToOmit){
  var newObj = {};
  for(var key in obj){
    if(keysToOmit.indexOf(key) === -1 ){
      newObj[key] = obj[key]
    }
  }
  return newObj;
}

//28.Writ a function called createMatrix which takes in two whole numbers, n and m, and creates a
//two-dimensional array with n columns and m rows. All of the values inside of your array should be 0.

function createMatrix(n, m){
  let arr = [];
  for (let i=0; i<m ;i++) {
    arr[i]=[];
  for (let j=0; j<n; j++) {
    arr[i][j]=0;
    }
  }
  return arr;
}

//their solution...VERY CLEAR!!
function createMatrix(columns, rows){
  var arr = [];
  for(var i = 0; i < rows; i++){
    var nestedArr = []
    for(var j = 0; j < columns; j++){
      nestedArr.push(0)
    }
    arr.push(nestedArr);
    // // or instead of the 5 lines above....
    // arr.push(new Array(rows).fill(0));
  }
  return arr;
}

//29. Write a function called fill that accepts an array and a value and returns the same array with e
//ach slot in the array filled with the value passed to fill.

function fill(arr, val){
  for(let i=0; i<arr.length; i++){
    arr[i]=val;
  }
  return arr;
}

//their solution..interesting, REDUCE used on arr...the acc is actually the arr itself!!
function fill(arr,val){
  return arr.reduce(function(acc,next,idx){
    acc[idx] = val
    return acc
  },arr)
}

//30.Write a function called isPrime which returns true if a number is a prime number. 

function isPrime(num){
  for(let i=2; i<num/2; i++){
    if (num % i === 0) return false;
  }
  return true;
}

//their solution
function isPrime(num){
  for(var i = 2; i <= Math.sqrt(num); i++){
    if(num % i === 0) {
      return false; 
    }
  }
  return num !== 1;
}
//31. Write a function called nth, which accepts an array and a number and returns the 
//element at whatever index is the number in the array. If the number is negative, the 
//nth element from the end is returned. 

function nth(arr, num){
  if (num < 0){
    let i = Math.abs(num);
    let reverseArr = arr.reverse();
    return reverseArr[i-1];
  }else{
    return arr[num];
  }
}

//32.Write a function called takeRight which accepts an array and an optional value and
// creates a copy of the array starting from the end for the value number of elements. 
//If a value is not passed the function should return an array with the last element. If 
//the second parameter is greater than the length of the array, return a copy of the entire array. 

function takeRight(arr, val=1){
  let start = arr.length-val;
  let end = arr.length;
  if (val>arr.length-1) return arr;
  let result = arr.slice(start, start+val) 
  return result;
}

//their solution

function takeRight(arr, n){
    if(n === 0){
        return [];
    }
    if(n >= arr.length){
        return arr.slice()
    }
    if(n < arr.length){
        return arr.slice(-n)
    }
    return arr.slice(-1)
}

//33. Write a function called upperFirst, which converts the first character of string to upper case.

function upperFirst(str){
  return str[0].toUpperCase() + str.slice(-(str.length-1));
}

//their solution
function upperFirst(str){
    return str[0].toUpperCase().concat(str.slice(1));
}

//34. Write a function called aperture which accepts a number and an array and returns a new array. 
//The new array should be composed of subarrays the size of the number with consecutive elements. If 
//the number passed to this function is greater than the length of the array or less than 1, an empty array is returned.

function aperture(num, arr){
  let result = [];
  if (num > arr.length || num < 1) return result;
  for(let i=0; i < arr.length; i++){
    let subArr = [];
    for(let j=i; j < i+num; j++){
      if (i+num <= arr.length) subArr.push(arr[j]);
    }
    if (subArr.length > 0) result.push(subArr);
  }
  return result;
}

//their solution????

function aperture(n, list) {
  var idx = 0;
  var limit = n > 0 ? list.length - (n - 1) : 0;
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = list.slice(idx, idx + n);
    idx += 1;
  }
  return acc;
}

//35.Write a function called findFactors which accepts a number and returns an array of all of the numbers which it is 
//divisible by starting from 1 and going up to the number.

function findFactors(num){
  let result=[];
  for(let i=1; i<=num; i++){
    if (num%i === 0) result.push(i);
  }
  return result;
}

//NOT PUSHED FROM HERE!!!!

 //36. Write a function called greatestCommonDivisor which accepts two whole numbers and returns the greatest common 
 //divisor between both numbers. The greatest common divisor of two whole numbers is the largest whole number that 
 //divides both numbers evenly.

function greatestCommonDivisor(num1, num2){
  let max = 1;
  for(let i=2; i <= Math.min(num1, num2); i++){
    if (num1 % i === 0  && num2 % i === 0) max=i;
  }
  return max;
}

//THEIR SOLUTION...NEVER SEEN THIS SOLUTION BEFORE!!
function greatestCommonDivisor(num1, num2){
    if (num1 === 0) return num2;
    while (num2 !== 0) {
        if (num1 > num2) num1 = num1 - num2;
        else num2 = num2 - num1;
    }
    return num1;
}


//37.Write a function called letterCounter which accepts a string and returns a function. When the inner function 
//is invoked it should accept a parameter which is a letter, and the inner function should return the number of times 
//that letter appears. This inner function should be case insensitive.

function letterCounter(str){
  strArr = str.split("");
    return function (letter){
      let count = 0;
      for(let i=0; i<strArr.length; i++){
        if (strArr[i].toLowerCase() === letter.toLowerCase()) count++;
      }
      return count;
  }
}

var counter = letterCounter('Amazing')
counter('a') // 2
counter('m') // 1

var counter2 = letterCounter('This Is Really Fun!')
counter2('i') // 2
counter2('t') // 1 

//their solution

function letterCounter(str){
  return function counter(char){
    var count = 0;
    var lowerStr = str.toLowerCase()
    var lowerChar = char.toLowerCase()
    for(var i = 0; i < lowerStr.length; i++){
      if(lowerStr[i] === char) count++
    }
    return count;
  }
}

//38.Write a function called omitBy which accepts an object and a callback function. This function should return 
//an object with all the keys and values for which the values return falsey values when passed into the callback function.
function omitBy(obj, cb){
  let result = {};
  for (let key in obj){
    if (!cb(obj[key])) result[key] = obj[key];
  }
  return result;
}

//calling the function

function isNumber(val) {
  return Number.isFinite(val);
}
var isString(val) {
  return typeof val === "string";
}

var object = { 'a': 1, 'b': '2', 'c': 3 };
omitBy(object, isNumber) // { 'b': '2' }
omitBy(object, isString) // { 'a': 1, 'c': 3 }

//39.Write a function called pickBy which accepts an object and a callback function. The function should return a new 
//object consisting of keys and values where the value returns something truthy when passed into the callback.

function pickBy(obj, cb){
  let result = {};
  for (let key in obj){
    if(cb(obj[key])) result[key]=obj[key];
  }
  return result;
}

//40.Write a function called reduce which accepts an array, a callback function, and an initial value. Reduce should
// iterate over the input array and accumulate a value based on the return value of the callback.

//The callback should accept as arguments the current accumulated value, the current array value, and the current 
//array index. After each iteration, the return value from the callback becomes the new accumulator value. When the 
//iteration is finished, reduce should return the final accumulated value.

//If value is provided, it is the first value in the accumulator. If no value is provided, the first element in the
// array should be the initial value, and process of accumulation using the callback should start from the second element in the array.

function reduce(arr, cb, initialVal){
  let acc = initialVal;
   if (acc === undefined){
      acc=arr[0];
      for (let i=1; i<arr.length; i++){
        acc = cb(acc, arr[i], i);
      }
    }else{
      for (let i=0; i<arr.length; i++){
        acc = cb(acc, arr[i], i);
      }
    }
  return acc;
}

//..calling it
reduce([1,2,3,4,5], function(accumulator, nextValue){
   return accumulator + nextValue;
}, 0); // 15

reduce([1,2,3,4,5], function(accumulator, nextValue){
   return accumulator + nextValue;
},10); // 25

reduce([2, 4, 1, 5, 3], function(accumulator, nextValue, idx){
   return accumulator + (nextValue < idx ? nextValue : 0);
}, 0); // 4

reduce(['Elie', 'Matt', 'Tim', 'Michael'], function(accumulator, nextValue){
   return accumulator += ' ' + nextValue;
},'The instructors are');
// 'The instructors are Elie Matt Tim Michael'

reduce([1,2,3,4,5], function(accumulator, nextValue){
   return accumulator + nextValue;
}); // 15

reduce(['Elie', 'Matt', 'Tim', 'Michael'], function(accumulator, nextValue){
   return accumulator += ' ' + nextValue;
}); // 'Elie Matt Tim Michael'

//their solution..LOOK IT UP, so much better!!
//If there is no initial value, it assigns the first array val to acc
//and IT DOESNT CALL THE CB ON IT!!
function reduce(arr, callback, initialVal) {
    var accumulator = initialVal;
    for (var i = 0; i < arr.length; i++) {
        if (accumulator !== undefined)
            accumulator = callback(accumulator, arr[i], i, arr);
        else
            accumulator = arr[i];
    }
    return accumulator;
}

//41. Write a function called remove that accepts an array and a callback. This function should iterate through the array 
//and remove all elements for which the callback returns a truthy value. Then, the function should return an array of removed elements.
function remove(arr, cb){
  let result = [];
  for(let i=0; i<arr.length; i++){
    if (cb(arr[i])){
      result.push(arr[i]);
      arr.splice(i, 1);
      i=0;
    } 
  }
  return result;
}

//their solution
function remove(arr,cb){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    while(cb(arr[i])){
      newArr = newArr.concat(arr.splice(i,1))  
    }
  } 
  return newArr;
}

//42.Write a function called sumBy which accepts an array of objects and a rule for summing up those objects to obtain
// a value. The rule can be provided in one of two ways. One way is to provide a callback function which is invoked
//or each element in array to generate the value to be summed. The callback is invoked with one argument: the current array element.

//Another option for the rule is to pass in a string referencing a key. With this syntax, the value to be summed is the
// value corresponding to the key passed in.

function sumBy(arrOfObj, rule){
  let sum = 0;
  for (let i=0; i<arrOfObj.length; i++){
    if(typeof rule === 'string'){
      for(var key in arrOfObj[i] ){
        if (key === rule) sum += arrOfObj[i][key];
      }
    }else{
      if (rule(arrOfObj[i])) sum += rule(arrOfObj[i]);
      }
  }
  return sum;
}

//their solution
function sumBy(arr,cbOrKey){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(typeof cbOrKey === 'function'){
            count+= cbOrKey(arr[i])
        } else {
            count+= arr[i][cbOrKey]
        }

    }

    return count;
}

//43.Write a function called sumDiagonals which accepts an NxN array of arrays and sums the two main diagonals in 
//the array: the one from the upper left to the lower right, and the one from the upper right to the lower left.

function sumUpDiagonals(arr){
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    for(let j=i; j<i+1; j++){
      sum += arr[i][j];
    }
    for(let j=arr.length-1-i; j>arr.length-2-i; j--){
      sum += arr[i][j];
    }
  }
  return sum;
}

//their solution LOOK IT UP, so much more simple!!!

function sumUpDiagonals(arr) {
  var total = 0;

  for (var i = 0; i < arr.length; i++) {
    total += arr[i][i];
    total += arr[i][arr.length-i-1];
  }
  return total
}

//44.Write a function called twoArrayDifference which accepts two arrays and returns an array of all of the values 
//n the first that are not the second array. The returned array should preserve the order of elements from the first array. 

function twoArrayDifference(arr1, arr2){
  let result = [];
  let seen = false;
  for (let i=0; i<arr1.length; i++){
    for (let j=0; j<arr2.length; j++){
      if (arr1[i]=== arr2[j]){
        seen=true;
        break;
      } 
    }
    if (seen===false) result.push(arr1[i]);
    seen=false;
  }
  return result;
}

//their solution ..VERY ELEGANT!!

function twoArrayDifference(arr1, arr2){
  return arr1.filter(function(val){
    return arr2.indexOf(val) === -1;
  })
}

//45.Write a function called union which accepts a variable number of arguments, which are all arrays. The function
//returns a new array of unique values from all the parameters.
function union(){
  //let arg = [].slice.call(arguments);
  let uniq = [];
  let arr = [];
  //solving it with CONCAT!!
  for(let i=0; i<arguments.length; i++){
  	//CONACAT RETURNS A NEW ARR, which REFERENCE has to be saved in this case using the same arr var.
  arr = arr.concat(arguments[i]);
  }
  //solving it with PUSH!!
  // for (let i=0; i<arguments.length; i++){
  //   for (let j=0; j<arguments[i].length; j++){
  //     //console.log("arg[i][j] is " + arg[i][j]);
  //       uniq.push(arguments[i][j]);
  //   }
  // }
  for (let j=0; j<arr.length; j++){
    if (!uniq.includes(arr[j])) uniq.push(arr[j]);
  }
  
  return uniq;
}
union([2],[1, 2]); // [2, 1]
union([2],[1, 2], [3], [3, 4, 5]); // [2,1,3,4,5]
union([2],[1, 2], [6,8], [4,5,1,2], [2,7,6,9]); // [2,1,6,8,4,5,7,9]

//46.Write a function called zipObject which accepts two arrays, one of property identifiers and one of corresponding
// values. It returns an object with the keys from one array and values from another. If the first array is longer than 
//the second, the value in the object should be undefined. If the second array is longer, ignore the additional values in the second array.

function zipObject(propArr, valArr){
  let result = {};
  //filling up the valArr with undefined
  if (propArr.length > valArr.length){
    let difference = propArr.length - valArr.length;
    while(difference > 0){
      valArr.push(undefined);
      difference --;
    }
  }
  for(let j=0; j<propArr.length; j++){
    result[propArr[j]]=valArr[j];
  }
  return result;
}

//their solution...A VAR GETS VALUE OF UNDEFINED BY DEFAULT, DOESNT NEED TO BE EXPLICITLY SET AS IN MY SOLUTION!!
function zipObject(){
    var obj = {};
    for(var i = 0; i < arguments[0].length; i++){
        obj[arguments[0][i]] = arguments[1][i]
    }
    return obj;
}

//47. Write a function called binarySearch which accepts a sorted array and a value 
//and returns the index at which the value exists. Otherwise, return -1. 






//48.Write a function called binaryToDecimal which accepts a string of zeros and ones and returns the decimal value.
// Do not use parseInt!

//sample : 0101= (1*2^4) + (0*2^3) + (1*2^2) + (0*2^1) + (1*2^0)=16+0+4+0+1=21
function binaryToDecimal(str){
  let result = 0;
  for (let i=0; i<str.length; i++){
    result += str[i]*(2**(str.length-1-i));
  }
  return result;
}

//their solution
function binaryToDecimal(num){
  var reversed = num.split('').reverse();
  var total = 0
  for(var i = 0; i < reversed.length; i++){
    if(reversed[i] === '1'){
      total += Math.pow(2, i)
    } 
  }
  return total
}

//49.Write a function called reverseVowels which accepts a string and reverses the vowels in the string. 
//first attempt
// function reverseVowels(str){
//   let arr = str.split("");
//   let vowels = ["a","e","i","o","u"];
//   let result = [];
//   let i=0;
//   let j=arr.length-1;
//   while(i <= Math.floor(parseInt(arr.length/2))){
//     if (vowels.includes(arr[i])){
//       if (vowels.includes(arr[j]) && j >Math.floor(parseInt(arr.length/2)) ){
//         let temp = arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//         i++;
//         j--;
//       }else{
//         j--;
//       }
//     }else{
//       i++;
//     }
//   }
//     return arr.join("");
// }

function reverseVowels(str) {
    var vowels = "aeiouAEIOU";
    var i = 0;
    var j = str.length - 1;
    
    while(i < j){
        if(vowels.indexOf(str[i]) < 0){
            i++;
            continue;
        }
        
        if(vowels.indexOf(str[j]) < 0){
            j--;
            continue;
        }
        
        var temp = "";
        str = str.split("");
        temp = str[i];
        str[i] = str[j];
        str[j] = temp;
        str = str.join("");
        
        i++;
        j--;
    }
    
    return str;
}
  
//their solution
function reverseVowels(s) {
    if(s.length === 0) return s;
    
    var chars = s.split('');
    var low = 0;
    var high = s.length - 1;
    var vowels = "aeiouAEIOU";
    var temp;
    while(low < high) {
    	//used inner loop instead of using continue and restarting the BIG loop!!!
        while(low < high && !vowels.includes(chars[low])) low++;
        while(low < high && !vowels.includes(chars[high])) high--;
        temp = chars[high];
        chars[high] = chars[low];
        chars[low] = temp;
        low++;
        high--;
    }
    
    return chars.join('');
}
//50.Write a function called rotateClockWise that rotates an NxN array of arrays clockwise, instead of counterclockwise.
// This problem is challenging so it will greatly help if you write/draw what the array looks like before and after it is rotated.

function rotateClockwise(){
  let result = [];
  let obj={};
  for (let i=arguments[0].length-1; i>=0; i--){
    for(let j=0; j<arguments[0][i].length; j++){
      let arr = [arguments[0][i][j]];
      if (Array.isArray(obj[j])){
      	//result[val.toLowerCase()] = (result[val.toLowerCase()] || 0) + 1;
        obj[j].push(arguments[0][i][j]);
      }else{
         obj[j] = arr;
      }
    }
  }
  for(var key in obj){
    result.push(obj[key]);
  }
  return result;
}

//their solution
function rotateClockwise(a) {
  var n=a.length;
  for (var i=0; i<n/2; i++) {
    for (var j=i; j<n-i-1; j++) {
      var tmp=a[i][j];
      a[i][j]=a[n-j-1][i];
      a[n-j-1][i]=a[n-i-1][n-j-1];
      a[n-i-1][n-j-1]=a[j][n-i-1];
      a[j][n-i-1]=tmp;
    }
  }
  return a;
}

//.51









































































































































































































