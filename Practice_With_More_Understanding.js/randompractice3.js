let marks = {
    harry: 90,
    shubham: 9,
    lovish: 56,
    Monika: 4
  }
   // traditional for loop
  //for (let i = 0; i < Object.keys(marks).length; i++) {
    // console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
  //}
  
  // for in loop which gives the output same as the above but with less efforts , in place of key we can write i or anything.
  //for (let key in marks) {
    // console.log("The marks of " + key + " are " + marks[key])
  //}
  
  // user input with while loop
  const prompt = require('prompt-sync')({sigint:true});
  let cn = 43
  let i
  while (i != cn) {
    console.log("Try again")
    i = Number(prompt("Enter a number"));
  }
  console.log("You have entered a correct number")
  
  // // latest way of function declaration
  //const mean = (a, b, c, d) => { 
    //return (a + b + c + d) / 4
  //}
  
  //console.log(mean(4, 5, 6, 7))