const readlineSync = require("readline-sync");

let a = readlineSync.question('Please enter the width of the rectangle: ');
let b = readlineSync.question('Please enter the height of the rectangle: ');

/**
 * Returns a multiplied by b.
 *
 * @param {number} a The width of the rectangle.
 * @param {number} b The height of the rectangle.
 * @return {number} The surface of the rectangle.
 */
function calcSurface(a, b) {
    return a * b;
}
console.log('The surface of the rectangle is ' + calcSurface(a, b));