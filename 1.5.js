const readlineSync = require("readline-sync");

let firstNumber = readlineSync.question('Can you give me a number with decimal please? ');
let secondNumber = readlineSync.question('Can you give me another one please? ');

firstNumberInteger = Math.trunc(firstNumber);
multipliedNumber = firstNumberInteger * secondNumber;

console.log(multipliedNumber);