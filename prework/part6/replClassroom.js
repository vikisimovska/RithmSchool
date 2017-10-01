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