const readlineSync = require("readline-sync");

let n = Number (readlineSync.question('Factorial of n, with n = '));
/**
 * Returns the factorial of a given number
 * @param {number} n The number to factor
 */
function factorial(n) {
    let acc = 1;
    if (n === 0) {
        return acc;
    } else if (n > 0) {
        acc = n * factorial(n - 1);
        return acc; 
    } else {
        acc = 'impossible to calculate';
        return acc;
    }
}
console.log('The factorial of ' + n + ' is ' + factorial(n));

/* NOT RECURSIVE
function factorial(n) {
    while (n > 1) {
        acc = acc * n;
        n = n - 1;
    }
    return acc;
}
console.log('The factorial of ' + n + ' is ' + acc');
*/
