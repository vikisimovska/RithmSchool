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
