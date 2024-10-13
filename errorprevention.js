function addTwoNums(a,b){
    try{
        if (typeof(a) != 'number'){
            throw new ReferenceError('the first arguement is not a number')
        }else if (typeof(b) != 'number'){
            throw new ReferenceError('the second arguement is not a number')
        }else {
            console.log(a + b)
        }
    //console.log(a + b);
    }catch(err){
        console.log("Error!", err)
    }

}
addTwoNums(5 , "5");//invoked the addTwoNums with a number and string. 
console.log("It still works")