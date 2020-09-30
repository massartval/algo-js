const readlineSync = require("readline-sync");

let n = readlineSync.question('How many random numbers do you want? ');

/**
 * Returns a random number between 1 and 10.
 *
 * Math.random generates a random decimal number between 0 and 1.
 * Math.floor rounds a number downwards to the nearest integer.
 * @return {number} The random number between 1 and 10.
 */
function rand10() {
    return Math.floor((Math.random() * 10) + 1);
}

/**
 * Returns an array of n random numbers
 * @param {number} n The length of the array / the amount of random numbers generated
 */
function multiRand(n) {
    let array = [];
    let i;
    for (i = 0; i <= (n - 1); i++) {
        array.push(rand10());
    }
    return array;
}

console.log(multiRand(n));
