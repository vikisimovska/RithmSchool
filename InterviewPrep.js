//system("clear")
//1.
function appendToString(str1, str2){
  return str1 + str2;
}

// appendToString("Hello", " World!"); // "Hello World!"
// appendToString("Foo", "bar"); // "Foobar"
// appendToString("bar", "Foo"); // "barFoo"
// appendToString("", "test"); // "test"
// appendToString("other test", ""); // "other test"

//2.
function prependToString(str1, str2){
return (str2 + str1)
}

// prependToString('awesome','very') // 'veryawesome'
// prependToString('world','hello ') // 'hello world'
// prependToString('nothing','') // 'nothing'

//3.
function charAt(str,num){
  if (num > str.length)
    return ""
  else
  return str[num]
}
// charAt('awesome',2) // 'e'
// charAt('awesome',12) // ''

//4.
function stringIncludes(str, char){
  return str.indexOf(char) != -1;
}

// stringIncludes('awesome', 'e'); // true
// stringIncludes('awesome', 'z'); // false

//5.
function stringIndexOf(str, char){
  for (var i = 0; i < str.length; i++){
    if (str[i] == char){
      return i;
    }
  }
  return -1;
}
// stringIndexOf('awesome','e') // 2
// stringIndexOf('awesome','z') // -1

//6.
function stringLastIndexOf(str, char){
  return str.lastIndexOf(char);
}
// stringLastIndexOf('awesome', 'e'); // 6
// stringLastIndexOf('awesome', 'z'); // -1

//7.
function repeat(str, num){
  newStr = ""
  for (var i = 0; i < num; i++){
    newStr += str;
  }
  return newStr;
}
//repeat('Matt',3) // 'MattMattMatt'
//repeat('Elie',2) // 'ElieElie'
//repeat('Tim',0) // ''

//8.
function removeFromString(str, i, n){
  return str.replace(str.substr(i, n), "")
}
//9.
function includes(arr, num){
  for (var i=0; i < arr.length; i++){
    if (arr[i] == num)
      return true;
  }
  return false;
}
//includes([1,2,3,4], 4) // true
//includes([1,2,3,4], 14) // false
//includes([], 14) // false

//10.
function indexOf(arr, num){
  for (var i=0; i < arr.length; i++){
    if (arr[i] == num) return i
  }
  return -1
}

// var arr = [5,10,15,20]
// indexOf(arr, 20) // 3
//
// var arr2 = [1,2,3,4,5]
// indexOf(arr2, 2) // 1

//11.
function lastIndexOf(arr, num){
  for (var i=arr.length-1; i >=0; i--){
    if (arr[i] === num) return i
  }
  return -1
}

// lastIndexOf([1,2,3,4], 2) // 1
// lastIndexOf([1,2,3,4,2], 2) // 4
// lastIndexOf([1,2,3,4], 22) // -1

//12.
function push(arr, num){
  arr[arr.length] = num;
  return arr.length;
}

// var arr = [1,2,3]
// push(arr, 10) // 4
//
// arr // [1,2,3,4]
//
// var secondArr = [5,2,1,6]
// push(secondArr, 20) // 5
//
// arr // [5,2,1,6,20]

//13.
function pop(arr){
  l = arr[arr.length-1]
  arr.splice(arr.length-1, 1);
  return l;
}

//14.
function unshift(arr, num){
  temp_arr = [];
  arr.forEach(function(element) {
    temp_arr.push(element);
});
  arr[0] = num;
  var size = arr.length;
  for (var i = 0; i < size; i++){
    arr[i+1] = temp_arr[i];
  }
 return arr.length;
}
// function unshift(arr, val){
//   for(var i = arr.length; i >= 0; i--){
//     arr[i] = arr[i-1]
//   }
//   arr[0] = val
//   return arr.length
// }
// var arr = [1,2,3];
// unshift(arr,0) // 4
// arr // [0,1,2,3]
//
// unshift([4,5,6],10) // 4

//15.
function shift(arr){
  first_ele = arr[0];
  for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i+1];
  }
  console.log(arr);
  arr.splice(arr.length-1, 1);
  console.log(arr);

  return first_ele;
}
// function shift(arr){
//   var firstVal = arr[0];
//   for (var i = 1; i < arr.length; i++) {
//     arr[i - 1] = arr[i];
//   }
//   arr.length = arr.length-1;
//   return firstVal;
// }
// var arr = ["a","b","c"];
// shift(arr); // "a"
// arr; // ["b","c"]

//16.
function reverse(arr){

  for (var i = arr.length - 2; i >= 0; i--){
    arr.push(arr[i]);
  }
  arr.splice(0, arr.length/2);
  return arr;
}

// swap each value in the array starting from the beginning and going to the middle
// function reverse(arr){
//   var mid = Math.floor(arr.length/2);
//   for(var i = 0; i < mid; i++){
//     // make a temporary variable to store the value closer to the beginning
//     var temp = arr[i];
//     // replace the value closer to the beginning with the value closer to the end
//     arr[i] = arr[arr.length - i - 1]
//     // replace the value closer to the end with the temporary variable
//     arr[arr.length - i - 1] = temp;
//   }
//   return arr;
// }
// reverse([5,4,3,2,1]) // [1,2,3,4,5]
// reverse([]) // []
//
// var arr = [1,2,3]
// reverse(arr) // [3,2,1]
// arr // [3,2,1]

//17.
function max(arr){
  var max = arr[0];
  for (var i=1; i < arr.length; i++){
    if (arr[i] > max) max=arr[i];
  }
  return max;
}
// function max(arr){
//   var highest = -Infinity
//   for(var i = 0; i<arr.length; i++){
//     if(arr[i] > highest) highest = arr[i]
//   }
//   return highest
// }
// max([5,1,4,7,1,2]) // 7
// max([3, 4, 12, 1, 8]) // 12
// max([-1,6,3,2.2,-10,-4]) // 6

//18.
function min(arr){
  var lowest = Infinity
  for(var i = 0; i<arr.length; i++){
    if(arr[i] < lowest) lowest = arr[i]
  }
  return lowest
}

// min([5,1,4,7,1,2]) // 1
// min([-1,6,3,2.2,-10,-4]) // -10

//19.
function slice(arr, arg1, arg2){
  result = []
  if (arguments.length === 3){
    if (arg2 > arr.length) arg2 = arr.length;
    count = 0;
    for (var i=arg1; i<arg2; i++){
      result[count] = arr[i];
      count++;
    }
  }
  else
  {
    count = 0;
    for (i=arg1; i<arr.length; i++){
       result[count] = arr[i];
      count++;
    }
  }
 return result;
}
// function slice(arr, start, end){
//   var newArr = [];
//   if(end === undefined || end > arr.length) {
//     end = arr.length
//   }
//   for(var i = start; i < end; i++){
//     newArr.push(arr[i])
//   }
//   return newArr;
// }
// slice([1,2,3,4,5], 0,2) // [1,2]
// slice([1,2,3,4,5], 2,4) // [3,4]
// slice([1,2,3,4,5], 2) // [3,4,5]
// slice([1,2,3,4,5], 2,10) // [3,4,5)

//20.
function concat(arr, args){
  result = arguments[0];
  for (var i=1; i<arguments.length; i++){
    for(var j=0; j<arguments[i].length; j++){
      result.push(arguments[i][j]);
    }
  }
  //arr.push.apply(arr, arguments);
  return result;
}
// function concat(){
//   var newArr = [];
//   for(var i = 0; i < arguments.length; i++){
//     for(var j = 0; j < arguments[i].length; j++){
//       newArr.push(arguments[i][j])
//     }
//   }
//   return newArr;
// }
// concat([1,2,3], [4,5,6]) // [1,2,3,4,5,6]
// concat([1,2,3], [4], [5], [6]) // [1,2,3,4,5,6]
// concat([1], [[2], [3]], [4]) // [1, [2], [3], 4]

//21.
function keys(obj){
  keys_arr = [];
  for(var singleKey in obj){
    keys_arr.push(singleKey);
  }
  return keys_arr;
}

// function keys(obj){
//   var arr = [];
//   for(var key in obj){
//     arr.push(key);
//   }
//   return arr;
// }
var obj = {a:1, b:2, c:3}
keys(obj) // ["a","b","c"]

var obj2 = {first: "Matt", last:"Lane"}
keys(obj) // ["first", "last"]

var obj3 = {}
keys(obj) // []

//22.
function values(obj){
  arr = [];
  for(var key in obj){
    arr.push(obj[key]);
  }
  return arr;
}
//23.
function  swapKeyAndValue(obj, key){
  newObj = {}
  for (var anyKey in obj){
    if (anyKey === key){
      newObj[obj[key]] = key
    } else{
      newObj[anyKey] = obj[anyKey];
    }
  }
  return newObj;
}

var instructor = {name: "Elie", job: "Instructor"}

swapKeyAndValue(instructor, 'name') // {Elie: 'name', job: "Instructor"}
swapKeyAndValue(instructor, 'job') // {name: "El , Instructor: 'job'}

//24.
function entries(obj){
  var result = [];
  for (var key in obj){
    var subArr = [key, obj[key]];
    result.push(subArr);
  }
  return result;
}

var obj = {a:1, b:2, c:3}
entries(obj) // [["a",1], ["b",2], ["c",3]]

var obj2 = {first: "Matt", last: "Lane", isDogOwner: true}
entries(obj2) // [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]

var obj3 = {}
entries(obj3) // []

//25.
function all(arr, fn){
  for (var i=0; i<arr.length; i++){
    if (fn(arr[i]) === false)
      return false;
  }
  return true;
}
// function all(arr, cb){
//   for(var i = 0; i < arr.length; i++){
//     if(cb(arr[i]) === false) return false;
//   }
//   return true;
// }

all([1,2,3,4,5], function(val){
  return val > 0
}) // true


// all([1,2,3,4,5], function(val){
//   return val < 2
// }) // false

//26.
function any(arr, fn){
  for (var i=0; i<arr.length; i++){
    if (fn(arr[i]) === true)
      return true;
  }
  return false;
}

// function any(arr,cb){
//   for(var i = 0; i < arr.length; i++){
//     if(cb(arr[i])) return true;
//   }
//   return false;
// }

//27.
function findAll(arr, fn){
  result = [];
  for (var i=0; i<arr.length; i++){
    if (fn(arr[i])) result.push(arr[i]);
  }
  return result;
}

// function findAll(arr, cb){
//   var newArr = [];
//   for(var i = 0; i < arr.length; i++){
//     if(cb(arr[i])) newArr.push(arr[i]);
//   }
//   return newArr;
// }

//28.
function  countIf(arr, fn){
  counter = 0;
  for (var i=0; i<arr.length; i++){
    if (fn(arr[i])) counter ++;
  }
  return counter;
}

//29.
function countValues(arr, num){
  counter = 0;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === num) counter ++;
  }
  return counter;
}

//30.
function squareEvenNumbers(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      sum += arr[i]**2;
    }
  }
  return sum;
}

//31.
function multiples(n, m){
  arr = [];
  multiplyBy = 1;
  num = n;
  while (true){
    arr.push(n*multiplyBy);
    if (n*multiplyBy % m === 0)
    {
      return arr;
    }
    else
    {
       multiplyBy ++;
    }
  }
}
// function multiples(num, mult){
//   var arr=[];
//   for(var i=1; i <= mult; i++){
//     arr.push(i*num);
//   }
//   return arr;
// }

//multiples(3,4) // [3, 6, 9, 12]

//32.function pluck(arr, key){
  result = [];
  for (var i=0; i < arr.length; i++){
     result.push(arr[i][key]);
  }
  return result;
}
// function pluck(arr, prop){
//   var newArr = [];
//   for(var i = 0; i < arr.length; i++){
//     newArr.push(arr[i][prop])
//   }
//   return newArr;
// }


//33.
// function twoOldestAges(arr){
//   secondOldest = arr[0];
//   secondIndex = undefined;
//   oldestAge = arr[0];
//   oldestIndex = undefined;
// for (var i = 0; i < arr.length; i++){
//   if (arr[i] > oldestAge){
//     oldestAge = arr[i];
//     oldestIndex = i;
//   }
// }
// arr.splice(oldestIndex, 1);
// //finding second index
// for (i = 0; i < arr.length; i++){
//   if (arr[i] > secondOldest){
//     secondOldest = arr[i];
//     secondIndex = i;
//   }
// }
//     arr.splice(secondIndex, 1);
//   return [secondOldest, oldestAge];
// }
function twoOldestAges(ages){
  return ages.sort(function(a,b){
    return a - b
  }).slice(-2);
}

// twoOldestAges( [1, 2, 10, 8] ) // [8, 10]
// twoOldestAges( [1, 2, 10, 8] ) // [8, 10]
// twoOldestAges( [6,1,9,10,4] ) // [9,10]
// twoOldestAges( [4,25,3,20,19,5] ) // [20,25]

//34.
