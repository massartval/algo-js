const readlineSync = require("readline-sync");

let a = [];
let b = [];

a.push(readlineSync.question('Coordinates of point A? x = '));
a.push(readlineSync.question('Coordinates of point A? y = '));

b.push(readlineSync.question('Coordinates of point B? x = '));
b.push(readlineSync.question('Coordinates of point B? y = '));

/**
 * Returns the distance between points A and B using Pythagore's theorem
 * @param {number} a Point A
 * @param {number} b Point B
 * @return The square root of the sum of the squared distances between x-coordinates and y-coordinates of points A and B
 */
function calcDistance(a, b) {
    return Math.sqrt(square(distX(a, b)) + square(distY(a, b)));
}

function square(n) {
    return Math.pow(n, 2);
}

function distX(a, b) {
    return a[0] - b[0];
}

function distY(a, b) {
    return a[1] - b[1];
}

console.log('The precise distance between A and B is ' + calcDistance(a, b));

function roundTwoDecimals(a, b) {
    return Math.round(calcDistance(a, b) * 100) / 100;
}
console.log('The rounded distance between A and B is ' + roundTwoDecimals(a, b));