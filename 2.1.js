const readlineSync = require("readline-sync");

let age = readlineSync.question('Please enter your age in numbers only: ');

if (age >= 18) {
    console.log('You are an adult');
} else {
    console.log('You are not yet an adult');
}