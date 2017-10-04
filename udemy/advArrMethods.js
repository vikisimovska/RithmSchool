/*1.
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,9,20]

*/
function doubleValues(arr){
  var newArr=[];
  arr.forEach(function callback(value, i, arr){
      newArr.push(value*2);
  });
  return newArr;
}

/*2.
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    var newArr = [];
    arr.forEach(function callback(val, i, arr){
        if (val%2 === 0) newArr.push(val);
    });
    return newArr;
}