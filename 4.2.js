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
console.log(rand10());