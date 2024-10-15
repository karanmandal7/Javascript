//var keyword

//1. We can access a var variable before initialization..
//...as long as the var variable is EVENTUALLY INITIALIZED
//...ANYWHERE IN OUR CODE
console.log(user);

// 2. We Can declare and redeclare the same var variable without errors
// var user = "Mary";
// var user = "Joanna";
// var user = "Mark";

//console.log(user);
var user;

// let keyword

//1. We CANNOT access a let variable before we declare it
// console.log(user); //Error!
// let user

//2. We Can declare an unassigned variable with let
// let user;
// console.log(user);

//3. We CAN'T redeclare a let variable
// let user = "Anna";

//4. But we CAN re-assign it
// user = "Anna";
// console.log(user);

// const keyword

//1. The const variable MUST BE INITIALIZED
// console.log(user);//Error!
// const user;

//2. We CAN'T access the const variable before initialization
//console.log(user); //unexpected token error
//const user = "Andrew";

//3. We CAN'T redeclare a const variable
// user = "Anna";
