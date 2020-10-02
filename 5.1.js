const readlineSync = require("readline-sync");

let name = readlineSync.question('What is the name of your favorite series? ');
let year = readlineSync.question('What year did its production start? ');
let cast = readlineSync.question('Can you name one or more actors of the series? ');
let series = [];

function askTvSeries(name, year, cast) {
    series.push(name);
    series.push(year);
    series.push(cast);
    return `The series ${name} started in ${year}, and it stars ${cast}`;
}
console.log(askTvSeries(name, year, cast));