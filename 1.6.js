const readlineSync = require("readline-sync");

let firstNumber = readlineSync.question('Can you give me a whole number please? ');
let secondNumber = readlineSync.question('Can you give me another one please? ');

modulo = firstNumber % secondNumber;

console.log('The modulo of their division is ' + modulo + '.')