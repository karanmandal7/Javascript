/*
 three specific methods that exist on arrays:

 forEach 

filter

 map
 */

 //The forEach() method
 const fruits = ['kiwi','mango','apple','pear'];
 function appendIndex(fruits, index){
    console.log(`${index}. ${fruits}`)
 }
 fruits.forEach(appendIndex);

 //Very often, the function that the forEach() method needs to use is passed in directly into the method call, like this:

 const veggies = ['onion','potato','tomato'];
 veggies.forEach(function(veggie, index){
    console.log(`${index}. ${veggie}`);

 });

 //The filter() method
//Another very useful method on the array is the filter() method.
//It filters your arrays based on a specific test. Those array items that pass the test are returned.

const nums = [0,10,20,30,40,50];
nums.filter(function(num){
    return num > 20;
});

//It filters your arrays based on a specific test. Those array items that pass the test are returned.

//The map method
/*
This method is used to map each array item over to another array's item, 
based on whatever work is performed inside the function 
that is passed-in to the map as a parameter. 
*/

[0,10,20,30,40,50].map(function(num){
    return num / 10
})

//The example below demonstrates how to use the object data structure to complete a specific task. 
//This task is to convert an object to an array:

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach(function(key){
    result.push(key, drone[key])
})
console.log(result)

//Working with Maps
let bestBoxers = new Map();//A map can feel very similar to an object in JS.
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
//To get a specific value, you need to use the get() method.
bestBoxers.get(1);

//Working with Sets
const repetitiveFruits = ['apple','pear','apple','pear','plum','apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);