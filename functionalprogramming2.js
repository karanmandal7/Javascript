/*
There are many more concepts and ideas in functional programming.

Here are some of the most important ones:

First-class functions

Higher-order function

Pure functions and side-effects

*/

// First-class functiona
/*
It is often said that functions in JavaScript are “first-class citizens”. What does that mean?

It means that a function in JavaScript is just another value that we can:

pass to other functions

save in a variable

return from other functions
*/

//For example, in JavaScript, it's perfectly normal to pass a function invocation to another function.

function addTwoNums(a,b){
    console.log(a+b)
}
function randomNum(){
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum(){ return 42};

var useRandom = true;
var getNumber;

if(useRandom){
    getNumber = randomNum
}else{
    getNumber = specificNum
}
addTwoNums(getNumber(), getNumber())
/*
This works because functions in JavaScript are truly first-class citizens, 
which can be assigned to variable names and passed around 
just like I would pass around a string, a number, an object, etc.
*/

// Higher-order functions
/*
A higher-order function is a function that has either one or both of the following characteristics:

It accepts other functions as arguments

It returns functions when invoked

*/
/*
Continuing from the previous section, 
consider the following code, 
in which I'm re-defining the addTwoNums() function 
so that it is a higher-order function:
*/
function addTwoNums(getNumber1, getNumber2){
    console.log(getNumber1() + getNumber2());
}
addTwoNums(specificNum, specificNum);
addTwoNums(specificNum, randomNum);
/*
the above function declaration of addTwoNums
as describing how it will deal with the getNumber1 and getNumber2
inputs: once it receives them as arguments, 
it will then attempt invoking them and concatenating the values returned from those invocations.
*/

//Pure functions and side-effects
//A pure function returns the exact same result as long as it's given the same values.
// example
function addTwoNums(a,b){
    console.log(a+b)
}
addTwoNums(5,6);
/*
This function will always return the same output, based on the input.
For example, as long as we give it a specific value.
*/

/*
Another rule for a function to be considered pure is that it should not have side-effects. A side-effect is any instance where a function makes a change outside of itself.

This includes: 

changing variable values outside of the function itself, or even relying on outside variables 

calling a Browser API (even the console itself!) 

calling Math.random() - since the value cannot be reliably repeated
*/