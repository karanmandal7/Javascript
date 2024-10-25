window.console.log(window)// Window object ,same as console.log("Hello World!");
console.log(document.body)//DOM  prints the document's body element
document.body.style.background = "yellow"//  DOM, sets the background color of the body element to yellow

console.log(window); // Window object, prints the Window object
window.alert("This is an alert!"); //window object, same as alert("This is an alert!");
console.log(document); // DOM, prints the DOM object

//Window Object 
/*
The Window Object is a global object in the browser that represents the browser window.
It is the top-level object in the browser's JavaScript hierarchy and everything in the browser window is a property of the Window object.
You can access the Window object by typing window in the browser console.
*/

//Document Object Model (DOM)
/*
The Document Object Model (DOM) is a programming interface for HTML and XML documents. It creates a tree-like representation of the document, which allows developers to interact with it and modify its content and structure.

In JavaScript, the DOM is represented by the document object. You can access the document object by typing document in the browser console.
*/

//Browser Object Model (BOM)
/*
The Browser Object Model (BOM) is a programming interface for web browsers. It provides access to browser-specific objects such as the browser history, the location bar, and the browser window.

The BOM is not a part of the official DOM specification and is specific to each browser. As a result, the objects and methods available in the BOM may vary between different browsers.
*/