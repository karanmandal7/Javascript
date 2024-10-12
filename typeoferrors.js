/*
Here are some of the most common errors in JavaScript: 

ReferenceError 

SyntaxError 

TypeError 

RangeError

*/
// console.log(username); // ReferenceError Example
// If the variable named username hasn't been declared, the above line of code will result in the following output:
// Uncaught ReferenceError: username is not defined


// Any kind of invalid JavaScript code will cause a SyntaxError.
// var a "there's no assignment operator here";// Syntax error example.
// Uncaught SyntaxError: Unexpected string //output
// There's an interesting caveat regarding the SyntaxError in JavaScript: it cannot be caught using the try-catch block.  

// A TypeError is thrown when, for example, trying to run a method on a non-supported data type.
// "hello".pop() // Uncaught TypeError: "hello".pop is not a function
// A simple example is attempting to run the pop() method on a string

// RangeError is thrown when we're giving a value to a function, but that value is out of the allowed range of acceptable input values.
// (10).toString(2); // '1010' //Base 2 is the binary system, which only uses 0 and 1. When we convert the number 10 from Base 10 to Base 2, we get 1010. This is just how the number 10 looks in binary form.
// (10).toString(8); // '12' in octal (Base 8)
// Base 2 is binary, Base 8 is octal, Base 10 is decimal, and Base 16 is hexadecimal.
// (10).toString(100); // Uncaught RangeError: toString() radix argument must be between 2 and 36
