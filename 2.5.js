const readlineSync = require("readline-sync");
let favNumber
do {favNumber = readlineSync.question('What is your favorite number? ');
    if (favNumber != 42) {
        console.log('Are you sure? ');
    }
} while (favNumber != 42);
console.log('Alright then');