
/*
Example Domain

This domain is established to be used for illustrative examples in documents. 
You may use this domain in examples without prior coordination or asking for permission.
*/

// This works in example.com website in your browser.
// Open the developer tools and focus on the Console tab.


// Task 1: Get h1 into a variable
const h1 = document.querySelector('h1');

// Task 3: Code an array
const arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
];

// Task 4: Write a click-handling function
function handleClicks() {
    switch (h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1];
            break;
        case arr[1]:
            h1.innerText = arr[2];
            break;
        case arr[2]:
            h1.innerText = arr[3];
            break;
        default:
            h1.innerText = arr[0];
    }
}

// Task 5: Add an event listener
h1.addEventListener('click', handleClicks);
