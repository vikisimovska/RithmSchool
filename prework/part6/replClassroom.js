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










































