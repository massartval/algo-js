let arr = [];

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
    let i;
    for (i = 0; i <= (n - 1); i++) {
        arr.push(rand10());
    }
    return arr;
}

console.log('The numbers are ' + multiRand(n));

/**
 * Returns the average value of the numbers inside an array 
 * @param {array} arr The array
 * @return {number} The average value of the array
 */
function average(arr) {
    let total = 0;
    let average = 0;
    for (let elem of arr) {
        total = total + elem;
        average = (total / arr.length)
    }
    return average;
}
console.log('The average is ' + average(arr));

/**
 * Returns the number with the minimum value inside an array 
 * @param {array} arr The array
 * @return {number} The minimum value of the array
 */
function min(arr) {
    return Math.min(...arr);
}
console.log('The minimum is ' + min(arr))

/**
 * Returns the number with the maximum value inside an array 
 * @param {array} arr The array
 * @return {number} The maximum value of the array
 */
function max(arr) {
    return Math.max(...arr);
}
console.log('The maximum is ' + max(arr))