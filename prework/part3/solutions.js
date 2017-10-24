Variables
  1.var name = “Violeta Simovska”;
var dayOfBirth = 12;
  2.the one thats declared and assigned last
  3.var color = prompt ("Please enter your favorite color");
console.log( color + " is a good choice!");
  4.var sentence = 'Somebody once said: "When in Rome, do as the Romans do" ';
  5.When a variable is declared but no value is assigned to it its type is undefined. When we assign null to a variable, we intentionally leave the variable empty. Its type is Object.
  6.NaN - not a number, is a property of a global obj. Its typeof is Number.
  7. undefined

Boolean Logic Exercises

Part I
1.true, true, 1, true, false, true, true
 
Part II
1. Keep it up!"
2. Because  ‘if statements evaluate boolean expression’, and since the variable isLearning already evaluates to true, plus is not a falsy value, it evaluates to true.

1. thid ..because it is the first expressions that returns true : the value of firstVariable is false and the value of thirdVariable is true.  false or true returns true.
2. undefined
3. no, because its one of the 6 javascript falsey values. When evaluated in a boolean expression some values like null, 0, undefined..ect are false.
4. no, false because its one of the 6 falsey values too.
5. yes..because its not falsey.

Part III
1.
if (Math.random() > 0.5 ){
  console.log ("Over 0.5");
} else {
  console.log ("Under 0.5");
}
2. Its a concept in JS that aside from false there are 5 more falsey values when evaluated inside an if statement: 0, null, undefined, “”, NaN. 


ARRAY BASICS
1. favoriteFoods = ["sushi", "pizza", "pretzel"];
2. favoriteFoods[1];
3. favoriteFoods[favoriteFoods.length-1] = “burrito”;
4. var formerFavoriteFood = favoriteFoods.shift();
5. favoriteFoods.push("rice");
6. favoriteFoods.unshift(“fajita”);
7. it returns undefined.
8. [2, 3, 4, 5].splice(1,1);
       ["alpha", "gamma", "delta"].splice(1,0,"betta");
       [10,-10,-5,-3,2,1].splice(1, 3, 9, 8, 7, 6, 5, 4, 3);

ARRAY METHODS

PART I
var arr = [];
arr.push("Viki");
arr.push("Simovska");
arr.unshift("blue");
arr.shift();
var arr2 = [];
arr2.push(27);
arr2.push("Java Script");
arr2.indexOf(42);
it will return -1, if the value wasnt found.

PART II
1.arr.pop().shift();
2.arr.concat(["Haskell", "Clojure"]);
3.["JavaScript", "Python", "Ruby", "Java"].join(", ");
4.Passing the value copies the value into a new memory location.
Passing by reference, copies the memory location address and assigns it
to a new variable (both variables pointing to the same place in memory).

ARRAY EXCERCISES
1. for (var i = 0; i < people.length; i++ ){
           console.log (people[i]);
         }
2. people.shift();
3. people.pop();
4. people.unshift("Matt");
5. people.push("Viki”);
6. for (var i = 0; i < people.length; i++ ){
	console.log (people[i]);
    if (people[i] === "Mary") break;
   }
7. var newArr = people.slice(2,4);
8. people.indexOf("Mary”);
9. people.indexOf("Foo");
10. people = ["Greg", "Mary", "Devon", "James"];
people.splice(2,1,"Elizabeth","Artie");
11. var withBob = people.concat("Bob");

Object Basics
Exercises:
1. var me = {
       firstName = "Viki",
       lastName = "Simovska",
       occupation = "student"
   }
2. me.firstName;
      me.lastName;
      me.occupation;
      me[“firstName”];
      me[“lastName”];
      me[“occupation”];
3. me.hobby = "swimming";
       delete me.occupation;
4. Unless is variable or expression we can use dot notification. For the other 2 cases we’ll need to use bracket notification.

OBJECT ITERATIONS
Exercises:
1.for (var key in namesAndHobbies){
    console.log(namesAndHobbies[key] + "=>" + key);
}
2. namesAndHobbies.Viki = "swimming";
3.if ("Viki" in namesAndHobbies){
       console.log ("Viki : " + namesAndHobbies.Viki);
     }

OBJECT EXERCISES:
1.programming.languages.push("GO");
2.programming.difficulty = 7;
3.delete programming.jokes;
4.programming.isFun = true;
5.for (var i=0; i < programming.languages.length; i++ ){
    console.log(programming.languages[i]);
}
6.for (var key in programming){
    console.log(key);
    }
7.for (var key in programming){
    console.log(programming[key]);
   }

FUNCTION EXERCISES:
function difference(num1,num2){
	  return num1-num2;
}
function product(num1, num2){
	  return num1*num2;
}

function printDay(num){
  var days = {
	    1: "Sunday",
	    2: "Monday",
	    3: "Tuesday",
	    4: "Wednesday",
	    5: "Thursday",
	    6: "Friday",
	    7: "Saturday",
     };
	  return days[num];
  }

function lastElement(arr){
     return arr[arr.length-1];
}

function numberCompare(num1, num2){
    if(num1 > num2){
	    return ‘First is greater’;
     } else if (num2 > num1){
	    return ‘Second is greater’;
     } else {
	  return ‘Numbers are equal’;  
     }
}
   function singleLetterCount(word, letter){
	 var counter = 0;
	  for(var i=0; i< word.length; i++){
	     if(word[i].toLowerCase() === letter.toLowerCase()){
	         counter++;
	     }
	  }
	  return counter;
    }


	function multipleLetterCount(str){
	  var obj = {};
	  for(var i = 0; i < str.length; i++){
	    if (!(str[i] in obj)){
	      obj[str[i]] = 1;
	    } else {
	       obj[str[i]]++;
	    }
	  }
	  return obj;
	}


	function arrayManipulation(arr, command, location, value){
	  if(command === 'remove' && location === 'end'){
	         return arr.pop();
	    } 
            if (command === 'remove' && location === ‘beginning’){
	         return arr.shift();
             }
	     if(command === 'add' && location === ‘beginning’){
	         arr.unshift(value);
	          return arr;
	    }
	    if (command === 'add' && location === ‘end’){
                 arr.push(value);
	         return arr;
	  }
	}


	function isPalindrome(str){
	  return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
	}
