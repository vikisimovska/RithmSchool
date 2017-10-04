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