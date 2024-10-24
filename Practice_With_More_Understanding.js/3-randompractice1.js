//1.To add a string an number
let a = "Karan"
let b = 6
console.log(a + b)


console.log(typeof (a+b))//typeof to get the type of parameters

//object play
const a1 = {
  name: "Karan",
  section: 1,
  isPrincipal: false
}
 //a1['section'] = 45 //like this we can manipulate const variables
 //a1 = {} //a1 = {} TypeError: Assignment to constant variable.at Object.

    

// 
//a1['friend'] = "Shubham"  
a1['name'] = "Karan"  
console.log(a1)

// Dictionary , different code
const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work."
}

console.log(dict['yakka'])