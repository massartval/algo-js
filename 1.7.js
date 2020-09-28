const readlineSync = require("readline-sync");

let shoeSize = readlineSync.question('Can you give me your shoe size please? ');
let birthYear = readlineSync.question('Can you give me your birth year please? ');

let a = shoeSize * 2;
a = a + 5;
a = a * 50; 
a = a - birthYear;
a = a + 1766;

console.log("Yout magic number is " + a + '!');