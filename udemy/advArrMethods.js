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
/*5.
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
//CHECK THIS SOLUTION!!
function vowelCount(str){
    var result = {};
    var vowels="aeiouAEIOU";
    str.split("").forEach(function callback(val, i, arr){
        if(vowels.includes(val)){ 
            result[val.toLowerCase()] = (result[val.toLowerCase()] || 0) + 1;
          }
  });
  return result;
}

//CHECK THIS SOLUTION: their solution
function vowelCount(str){
    var result = {};
    var vowels="aeiouAEIOU";
    str.split("").forEach(function callback(val, i, arr){
        if(vowels.indexOf(val) !=== -1){ 
        	if (val.toLowerCase() in result){
        		result[val.toLowerCase()]++; 
        	}else{
        		result[val.toLowerCase()] = 1; 
        	}
        }           
  });
  return result;
}
//7.https://www.udemy.com/the-advanced-web-developer-bootcamp/learn/v4/t/lecture/7306846?start=0











