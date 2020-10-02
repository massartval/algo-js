const readlineSync = require("readline-sync");

let castQuestion = readlineSync.question('Can you name one or more actors of the series? Y/N ');

let cast = [];
if ((castQuestion == 'N') || (castQuestion == 'n')) {
    cast.push('some famous people');
} else if ((castQuestion == 'Y') || (castQuestion == 'y')) {
    let castInput = readlineSync.question('Please name one (leave empty to exit): ');
    let again = true;
    while (again == true) {
        cast.push(castInput);
        castInput = readlineSync.question('Please name another one (leave empty to exit): ')
        if (castInput == '') {
            again == false;
        }
    }
} else {
    console.log('Please answer with Y or N');
}

let series = [];

function askTvSeries(cast) {

    series.push(cast);
    return `The series ... started in ..., and it stars ${cast}`;
}
console.log(askTvSeries(cast));