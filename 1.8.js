const readlineSync = require("readline-sync");

let food = readlineSync.question('1/4 What is the last thing you ate? => I ate (a) ');
let mood = readlineSync.question('2/4 Please describe your current mood with one word: => I feel ');
let animal = readlineSync.question('3/4 What is your favorite animal ? => My favorite animal is the ');
let nickname = readlineSync.question('4/4 What is the most ridiculous nickname that someone ever gave you ? => My worst nickname is ');

console.log('Make place for ' + nickname + ', the ' + mood + ' ' + food + ', riding on a mighty ' + animal + '!')