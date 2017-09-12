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

//2 . 
function prependToString(str1, str2){
return (str2 + str1)
}

prependToString('awesome','very') // 'veryawesome'
prependToString('world','hello ') // 'hello world'
prependToString('nothing','') // 'nothing'
