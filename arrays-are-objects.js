/*
var fruits = [];
fruits.push("apple");
fruits.push('pear');
fruits.pop();
console.log(fruits);
*/
/*
Commonly used built-in methods on arrays are the:
1.push()-add new items to an array
2.pop()-To remove the last item froman array, i can use this method.
*/

function arrayBuilder(one, two, three){
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
   // console.log (arr);
    return arr;
    
}
/*
I can now build a function that takes all its
arguements and pushes them into a array like the above code.
if i had console.log the array,insted of return arr; then, 
the functio will return the arr insted of printing it to
the console.
The main difference is that you will need to either store
the result in a variable or use console.log() when calling the 
function to see the output.
*/
/*
Like in the above code code i returned it.
Additionally, I can save this function call to a variable.
Named simpleArr.
And now i can console the log values stored in simpleArr:.
*/ 
//arrayBuilder(1,2,3);//This calls the Function
 var simpleArr = arrayBuilder('apple','pear','plum');
 console.log(simpleArr);