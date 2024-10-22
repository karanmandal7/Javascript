const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Hey, what's your age? ", (input) => {
    let a = Number.parseInt(input); // Converting the string to a number

    if (a < 0) {
        console.log("This is an invalid age");
    } else if (a < 9) {
        console.log("You are a kid and you cannot even think of driving");
    } else if (a < 18 && a >= 9) {
        console.log("You are a kid and you can think of driving after 18");
    } else {
        console.log("You can now drive as you are above 18");
    }

    console.log("Done");
    console.log("You can", (a < 18 ? "not drive" : "drive"));

    rl.close(); // Close the readline interface
});
