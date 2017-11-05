Debugging Exercises

1.What does the throw keyword do?
The throw keyword stops the execution of the code by throwing an error.
//The throw keyword allows you to return an error/exception of your choice

2.What does the finally keyword do?
The finally keyword executes the code inside its block regardless whether an error 
has been thrown or not. 

3.What is the difference between a TypeError and ReferenceError?
Type error occures when we incorrectly use the data types in java script. 
Reference error occures when we try to access a variable that doesnt exist
in that particular scope.
//TypeErrors occur when JavaScript is unable to perform a certain operation on a data type
// (invoking something that is not a function, accessing properties on something that is not an object). 
//ReferenceErrors occur when JavaScript does not have a reference to the variable in memory 
//(accessing a variable that is not defined or not in the current or outer scope)

4.How do you create a snippet in the Chrome dev tools?
You create a snippet by going into the Sources and pressing + new snipet button

5.In the Chrome dev tools, on the right hand side of the sources tab, there is a 
"pause" button which allows you to "pause on caught exceptions." What is an exception?
An exception is an event, which occurs during the execution of a program, that disrupts
the normal flow of the programs instructions. 
//An exception is an error that occurs in your program. 
//Caught exceptions are errors that are evaluated in a try/catch block

6.How do we "catch" errors in JavaScript? Give an example with code for what that might look like.
If the code throws an error, we could "catch" it, and in that way gracefully handeled it, 
so the prog doesnt crash. 
We catch errors with a try catch block:

var str = "Hi";
try{
	//trying to invoke variable
	str();
} catch (e){
	console.log("This is a type error is ", e);
}

Explain what type of error will be thrown, why the error is occuring, and how to fix it:

1. person;

Reference Error because person is not defined.

2.var data = {};
data.displayInfo();

Type error -  we are trying to invoke undefined.

3.var data = {};
data.displayInfo.foo = "bar";

Type Error - we are trying to assign property on undefined.

4.function data(){
    var thing = "foo";
}
data()
thing;

Reference error - think variable doesnt exist in the outer(global) scope.


Part II
Fix the broken code and explain what was wrong:

1.for(var i=0; i > 5; i++){
    console.log(i);
}

The condition is wrong. i will never be grater then 5. It can only be less.
for(var i=0; i < 5; i++){
    console.log(i);
}

2.function addIfEven(num){
    if(num % 2 = 0){
        return num + 5;
    }
    return num;
}

The assigment operator in the second line. It needs to be a comparison operator instead.
function addIfEven(num){
    if(num % 2 === 0){
        return num + 5;
    }
    return num;
}

3. function loopToFive(){
    for(var i=0, i < 5, i++){
        console.log(i);
    }
}

It needs semicolons instead of colons in the for loop.

function loopToFive(){
    for(var i=0; i < 5; i++){
        console.log(i);
    }
}

4. function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i=0; i<numbers.length-1; i++;){
        if(numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // should return [2,4,6,8] 

Few things are wrong:
-On line 3 inside the for loop:
   The condition is wrong, its not grabbing the last number and
    no need of sami colon after i++
- In the if statement the asignment operator is wrong and the semi colon after the ')'
- Line 6 needs to be pushing an element form the numbers arr instead of the index
- It needs to be returning the arr  outside the foor loop

function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i=0; i<numbers.length; i++){
        if(numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // should return [2,4,6,8] 
















