// Taks 1
console.log(`------------Task 1------------`);
let buyOrange = 400;
let buyApple = 300;
let moneyGiven = 1000;

console.log(`Total cost: ${(buyOrange + buyApple)}$`)
console.log('Given 1000$ taka to shopkeeper');
console.log(`The change will be ${1000 - (buyOrange + buyApple)}$\n`);

// Taks 2
console.log(`------------Task 2------------`);
let mathMark = 75.25;
let biologyMark = 65;
let chemistryMark = 80;
let physicsMark = 35.45;
let banglaMark = 99.50;

let avgMark = (mathMark + biologyMark + chemistryMark + physicsMark + banglaMark) / 5;
console.log(`Total marks: ${avgMark.toFixed(2)}\n`);

// Task 3
console.log(`------------Task 3------------`);
let sampleInput = 119;
let reminderVal = (119 % 5);
console.log(`Reminder value is: ${reminderVal}\n`);

// Task 4
console.log(`------------Task 4------------`);
// var a = isNaN('11');
var a = isNaN(2-10);
console.log(a);