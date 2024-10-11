/*
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = "200";
car.speed = 100;
console.log(car);
//can access and update properties on objects using either the dot notation, or the brackets notation, or a combination of both.
car["number of doors"] = 4;
console.log(car);//i can add space characters inside property names.
//Additionally. i can add numbers(as the string data type) as property keys
car["2022"] = 1902;
console.log(car);// Having a property key as a number string not really conveying a lot of useful information hence not adviced to do it 
*/
var arrOfKeys = ['speed','altitude','color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for(var i = 0; i < arrOfKeys.length; i++){
    console.log(drone[arrOfKeys[i]])
}

/* 
UsinTg the fact that brackets notation can evaluate expressions, i accessed
the arrOfKeys[i] property on the dron object.

It was evaluated like this :
The value o i was 0
The value of arrOfKeys[i] was arrOfKeys[0], which was"speed"
Thus, drone[arrOfKeys[i]] was evaluated to drone["speed"] which is equal to 100
This allowed me to loop over each of the values stored inside the drone object, based on each
of its properties' keys.
*/