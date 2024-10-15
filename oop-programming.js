class mobile{
    useSystem(){
        console.log("Smooth Running")
    }
}
class keypad extends mobile{
    useSystem(){
        console.log("Kam Chalau")
    }
}
class android extends mobile{
    useSystem(){
        console.log("Slow Functioning")
    }
}

class os extends mobile{
    useSystem(){
        console.log("Fast & Furious")
    }
}
var samsung = new android();
var iphone = new os();
samsung.useSystem();
iphone.useSystem();
    
// inheritance, polymorphism some oop principles