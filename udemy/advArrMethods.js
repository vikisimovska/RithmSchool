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


/*3.
Write a function called showFirstAndLast which accepts an array and returns a new array with only the  even values in the array passed to the function

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    var newArr = [];
    arr.forEach(function callback(val, i, arr){
        //if (val.length % 2 === 0)
        newArr.push(val[0]+val[val.length-1]);
    });
    return newArr;
}
/*4.
Write a function called addKeyAndValue which accepts an array, a key, and a value and returns a the array passed to the function with the new key and value added for each variable 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]) // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    arr.forEach(function callback(val, i, arr){
        val[key]=value;
    });
    return arr;
}

