// 1. Implement a function called addUpTo which takes a number as an argument and 
//adds up all the whole numbers from 1 up to and including the number passed in.

// Some edge cases to consider:

// If the argument passed in is not a number, the function should return NaN.
// If the argument passed in is less than 1, the function should return 0.
// If the argument passed in is not a whole number, the function should add 
//up all the whole numbers between 1 and the largest whole number less than the argument passed in.

function addUpTo(num) {
  var sum = 0;
  if (!Number.isFinite(num)) return NaN;
  if (num < 0) return 0;
  for (let i=1; i<= Math.floor(num); i++ ){
    sum += i;
  }
  return sum;
}

// addUpTo(5); // 15, since 1 + 2 + 3 + 4 + 5 = 15
// addUpTo(10); // 55
// addUpTo("three"); // NaN
// addUpTo(null); // NaN
// addUpTo(0); // 0
// addUpTo(-100); // 0
// addUpTo(3.4); // 6
// addUpTo(5.9999999);  // 15


//2.Part I

//Write a function called twoArrayObject which accepts to arrays of varying 
//lengths.The first array consists of keys and the second one consists of values. 
//Your function should return an object created from the keys and values. 
//If there are not enough values, the rest of keys should have a value of null. 
//If there not enough keys, just ignore the rest of values.

function twoArrayObject(keyArr, valArr){
  var obj = {};
  for (let i=0; i < keyArr.length; i++){
    obj[keyArr[i]] = valArr[i] || null;
  }
  return obj;
}

//model solution
function twoArrayObject(keys, values) {
  var obj = {}
  
  for (var i = 0; i < keys.length; i++) {
    obj[keys[i]] = i < values.length ? values[i] : null
  }
  
  return obj
}

twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
twoArrayObject(['a', 'b', 'c']  , [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
twoArrayObject(['x', 'y', 'z']  , [1,2]) // {'x': 1, 'y': 2, 'z': null}

//2.Part II

//Write a function called longestFall, which accepts an array of integers, and returns  
//the length of the longest consecutive decrease of integers.
function longestFall(n) {

  var counter=1;
  var maxCounter=0;

  if(n.length === 0) return 0

  for(let i =1; i < n.length; i++){
    if(n[i] < n[i-1]){
      counter++
      maxCounter = Math.max(counter,maxCounter)
    } else {
      counter =1
    }
  }

  return maxCounter || 1
}

longestFall([5, 3, 1, 3, 0]) // 3, 5-3-1 is the longest consecutive sequence of decreasing integers
longestFall([2, 2, 1]) // 2, 2-1 is the longest consecutive sequence of decreasing integers
longestFall([2, 2, 2]) // 1, 2 is the longest consecutive sequence of decreasing integers 
longestFall([5, 4, 4, 4, 3, 2]) // 3, 4-3-2 is the longest
longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1]) // 5, 9-8-7-6-5 is the longest
longestFall([]) // 0

//3.Write a function called snail which Given an n x n array, returns the array elements arranged 
//from outermost elements to the middle element, traveling clockwise.


//EXPLAINED MODEL SOLUTION!!
function snail(arr){
  var result=[];
  while(arr.length){
     //get all the elements from the first arr 
    result = result.concat(arr.shift());
    
    //******IF ONLY 1 ELEMENT IS LEFT IN A ODD LENGTH ARR
    //the arr will be empty when it hits here (because of the shift on the previous line)
    //******AND IT WILL NEVER ENTER HERE BECAUSE OF THE CONDITION OF THE FOR LOOP
    //(i < arr.length)->arr.length will be zero!!
    //
    //get the last elements from all the arr
    for (let i=0; i < arr.length; i++){
      result.push(arr[i].pop());
    }
    
    //*****IT WILL ENTER HERE AND THATS WHY [] OPTION IS NEEDED!!
    //get all the elements from the last arr in reverse order
     result = result.concat((arr.pop() || []).reverse());
    
    //*****IT WILLL NEVER ENTER HERE
    //getting all the first elements, starting from the last array
    for (let i=arr.length-1; i >= 0; i--){
      result.push(arr[i].shift());
    }
  }
  return result;
} 

//MY SOLUTION
function snail(arr){
  //loop until arr.length > 1
  //get the first arr
  //get the last elements from the rest of the arrays
  //get the last arr in reverse order
  //get all the first elements starting from the last array
  //after exiting the loop, get the last element
 
  var result=[];
  while(arr.length > 1){
   
    //get all the elements from the first arr 
    result = result.concat(arr.shift());
    
    //get the last elements from all the arr
    for (let i=0; i < arr.length; i++){
      result.push(arr[i].pop());
    }
    
    //get all the elements from the last arr in reverse order
    result = result.concat(arr.pop().reverse());
    
    //getting all the first elements, starting from the last array
    for (let i=arr.length-1; i >= 0; i--){
      result.push(arr[i].shift());
    }
  } 
  //get the last element
    result = result.concat(arr.shift());
  
  return result;
}  

snail([[1,2,3],[4,5,6],[7,8,9]] ) // [1,2,3,6,9,8,7,4,5]

snail([[1,2,3],[8,9,4], [7,6,5]]) // [1,2,3,4,5,6,7,8,9]

snail([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]) 
// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]













