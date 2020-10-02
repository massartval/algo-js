const readlineSync = require("readline-sync");

let n = Number (readlineSync.question('Factorial of n, with n = '));
let acc = 1;

function factorial(n) {
    if (n === 0) {
        return acc;
    }
    else if (n > 0) {
        acc = n * factorial(n - 1);
        return acc;
    } else {
        return 'impossible to calculate';
    }
}

console.log('The factorial of ' + n + ' is ' + factorial(n));
