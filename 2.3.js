const readlineSync = require("readline-sync");

let whileLoop = readlineSync.question('Do you want a \"while\" loop? (Y/N) ');
if ((whileLoop == 'Y') || (whileLoop == 'y')) {
    let i = 1;
    while (i <= 100) {
        if ((i % 2) == 0) {
            console.log(i);
        }
        i += 1;
    }
} else if ((whileLoop == 'N') || (whileLoop == 'n')) {
    let forLoop = readlineSync.question('Do you want a \"for\" loop? (Y/N) ');
    if ((forLoop == 'Y') || (forLoop == 'y')) {
        for (let i = 0; i <= 100; i += 2) {
        console.log(i);
        } 
    } else if ((forLoop == 'N') || (forLoop == 'n')) {
        console.log('Ok bye!')
    } else {
        console.log('Please answer with Y or N');
    }
} else {
    console.log('Please answer with Y or N');
}