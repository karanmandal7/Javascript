console.log("var, let and const")
// var a = 45; Var can be changed
// var a = "p"
let b = "Karan";
const author = "Karan"
//author = 5 // Throws an error because constant cannot be changed
b = 4 // let can be changed but the value only and within a block, but i can't reassign let variable with same name and different value(like let b = 5)
//let b = 5;SyntaxError: Identifier 'b' has already been declared
const karan = 0;
let c = null 
let d  = undefined  
{
  let b = 'this'
  console.log(b) // let changes can be made at block level
}
console.log(b)