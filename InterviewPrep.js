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
