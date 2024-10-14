
//When writing FP code, we keep data and functionality separate and pass data into functions only when we want something computed.
// Functional Programming
function getDistance(mph, h){
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance);
//In functional programming, functions return new values and then use those values somewhere else in the code.

//Object Oriented Programming
//In this style, we group data and functionality as properties and methods inside objects.

var virtualPet = {
    sleepy: true,
    nap: function(){
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) //true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

/*
Functional Programming paradigm works by keeping the data and functionality separate. 
It's counterpart, OOP, works by keeping the data and functionality grouped in meaningful objects.
*/


