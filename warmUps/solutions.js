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

//4.Write a function called separatePositive which accepts an array of non-zero integers. 
//Separate the positive integers to the left and the negative integers to the right. 
//The positive numbers and negative numbers need not be in sorted order. 
function separatePositive(arr){
  var left = 0;
  var right = arr.length-1;
  while ( left < right){
    if (arr[left] > 0){
          left ++;
    } 
    if (arr[right] < 0){
      right --;  
    }
    if (arr[left] < 0 && arr[right] > 0){
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left ++;
      right --; 
    }
  }
  return arr;
}
separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
separatePositive([5, 10, -15, 20, 25]) // [10, 10, 25, 20, -15]    
separatePositive([-5, 5]) // [5, -5]  
separatePositive([1, 2, 3]) // [1, 2, 3] 

//5. Hamming Distance (https://en.wikipedia.org/wiki/Hamming_distance).
//This function takes in two strings of equal length, and calculates the distance between t
//hem. Here, "distance" is defined as the number of characters that differ at the same position. 
//The function should ignore case.If the inputs do not have the same length, the function should 
//return "Input strings must have the same length."

function hammingDistance(str1, str2) {
  var diff = 0;
  if (str1.length !== str2.length){
      return ("Input strings must have the same length.");
  }
  for(let i= 0; i < str1.length; i++){
    if (str1[i].toLowerCase() !== str2[i].toLowerCase()){
      diff++;
    }
  }
  return diff;
}
function hammingDistance(str1, str2) {
  var diff = 0;
  if (str1.length !== str2.length){
      return ("Input strings must have the same length.");
  }
  for(let i= 0; i < str1.length; i++){
    if (str1[i].toLowerCase() !== str2[i].toLowerCase()){
      diff++;
    }
  }
  return diff;
}
//MY SOLUTION
function oneCharDifference(str1, str2) {

//1st case - if length same -> hamming distance ===1
  if (str1.length === str2.length){
    return hammingDistance(str1, str2) === 1;
  } 
 
//2nd case - if length diff by more then 1 -> return false
  if (Math.abs(str1.length-str2.length) > 1) return false;
  
//3rd case -> check if one of the str is empty str and the other one has only one char in it 
  if ((str1.length === 0 && str2.length === 1) || (str1.length === 1 && str2.length === 0) ) return true;
 

//4th case -> length differs by one
//return false if the pointer of longer str is more then 1
  var shorter, longer, diff = 0, shPtr = 0;
  str1.length > str2.length ? (shorter = str2, longer=str1 ): (shorter = str1, longer=str2); 
  for (let i=0; i < longer.length; i++){
    
    //if both pointers are equal-> move them
      if (shorter[shPtr].toLowerCase() === longer[i].toLowerCase()){
        if (shPtr < shorter.length-1) shPtr++;
       
      }else {
         
      //if they are not the same move the larger, keep counter if it reaches 2 return false;
        diff++;
        if (diff >= 2) return false;
      }
  }
  return true;
}







