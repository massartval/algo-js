const readlineSync = require("readline-sync");

let pushQuestion = readlineSync.question('Do you want a \"push\" duplicata? (Y/N) ');
if ((pushQuestion == 'Y') || (pushQuestion == 'y')) {
    // WITH PUSH
    let pushArray = [1, 2, 3, 4];
    let pushDuplicata = [];
    for (let elem of pushArray) {
        pushDuplicata.push(elem);
    }
    console.log(pushDuplicata);
    //
} else if ((pushQuestion == 'N') || (pushQuestion == 'n')) {
    let SMCQuestion = readlineSync.question('Do you want a \"single method call\" duplicata? (Y/N) ');
    if ((SMCQuestion == 'Y') || (SMCQuestion == 'y')) {
    // WITH A SINGLE METHOD CALL
    let concatArray = [5, 6, 7, 8];
    let concatDuplicata = [].concat(concatArray);
    console.log(concatDuplicata);
    //
    } else if ((SMCQuestion == 'N') || (SMCQuestion == 'n')) {
        console.log('Ok bye!')
    } else {
        console.log('Please answer with Y or N');
    }
    } else {
    console.log('Please answer with Y or N');
}