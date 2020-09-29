const readlineSync = require("readline-sync");

let min = readlineSync.question('Give me a small number: ');
let max = readlineSync.question('Give me a larger number: ');

if (min > max) {
    console.log('What part of \"larger number\" did you not understand, you fried squid? ');
} else {
    let current = readlineSync.question('Give me a random number: ');
    if (min == current == max) {
        console.log('Is ' + current + ' the only number that you know?')
    }else if ((min <= current) && (current <= max)) {
        console.log(current + ' is between ' + min + ' and ' + max);
    } else {
        console.log(current + ' is outside of ' + min + ' and ' + max);
    }
}