const readlineSync = require("readline-sync");
// Question 1
let Question1 = readlineSync.question('Question 1? (Y/N) ');
if ((Question1 == 'Y') || (Question1 == 'y')) {
    console.log('1 = Y => EXIT') ;
} else if ((Question1 == 'N') || (Question1 == 'n')) {
    console.log('1 = N => 2 = ?')
    //Question 2
    let Question2 = readlineSync.question('Question 2? (Y/N) ');
    if ((Question2 == 'Y') || (Question2 == 'y')) {
        console.log('2 = Y => EXIT');
    } else if ((Question2 == 'N') || (Question2 == 'n')) {
        console.log('2 = N => EXIT')
    } else {
        console.log('Please answer with Y or N');
    }
} else {
    console.log('Please answer with Y or N');
}