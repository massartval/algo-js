const readlineSync = require("readline-sync");
let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let dayNumber = readlineSync.question('Please enter a whole number between 1 and 7: '); 
console.log(weekDays[(dayNumber - 1)]);

