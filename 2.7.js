const readlineSync = require("readline-sync");

let howManyQuestions = Number (readlineSync.question('Please enter a whole number: '));
let thisManyQuestions = 0;
let total = 0;

// SHOULD ALLOW FEEDBACK TO USER
console.log('You entered a ' + typeof(howManyQuestions))

// SHOULD CHECK IF NUMBER
//if (typeof(howManyQuestions) != 'Number') {
if (howManyQuestions === NaN) {
    console.log('That is not a number, dimwit...');

} else { 
    console.log(howManyQuestions + ' more to go.');
    for (let i = 1; i <= howManyQuestions; i += 1) {
    thisManyQuestions = Number (readlineSync.question('Please enter another whole number: '));
    total = total + thisManyQuestions;
    } 
    console.log('Sum of all the numbers entered except for the first one: ' + total);

}