// Task 1
console.log("----------Task 1----------");
let burgerPrice = 500;
burgerPrice >= 500 ? console.log("Free coke\n") : console.log("25 taka\n");

// Task 2
console.log("----------Task 2----------");
let weight = 74;
let height = 5.6;
let ftToMt = 0.3048 * height;
const bmi = weight / (ftToMt * ftToMt);

const ans = ftToMt != 0 ? bmi <= 18.5
     ? 'Underweight'
     : bmi >= 18.5 && bmi <= 24.9
     ? 'Normal'
     : bmi >= 25 && bmi <= 39.9
     ? 'Overweight'
     : 'Obese'
     : 'Invalid';
console.log('Your BMI:',ans,'\n');

// Task 3
console.log('----------Taks 3----------');
let mark = 75;
let checkGrade = (mark > 0 && mark <= 100)
     ? (mark >= 90 && mark <= 100)
     ? `Your mark ${mark}\nGrade A`
     : (mark >= 80 && mark <= 89)
     ? `Your mark ${mark}\nGrade B`
     : (mark >= 70 && mark <= 79)
     ? `Your mark ${mark}\nGrade C`
     : (mark >= 60 && mark <= 69)
     ? `Your mark ${mark}\nGrade D`
     : `Your mark ${mark}\nGrade F`
     : 'Invalid mark\n';
console.log(checkGrade);

// Task 4
console.log('----------Taks 4----------');
let yourScore = 80;
let friendScore = 39;
let checkScore = (yourScore >= 80) 
     ? (friendScore >= 80)
     ? 'Go for lunch'
     : (friendScore < 80 && friendScore >= 60)
     ? 'Good luck next time'
     : (friendScore < 60 && friendScore >= 40)
     ? 'Message unseen'
     : 'Block your friend'
     : 'Go to sleep & act sad';
console.log('=>',checkScore,'\n');

// Task 5
console.log('----------Taks 5----------');
let num1 = 20;
let num2 = 10;
let result;

let numPlay = num1 > num2
     ? (result = num1 * num1)
     : (result = num1 + num2)
console.log('Result value:',result,'\n');

// Task 6
console.log('----------Task 6----------');
let age = 75;
let ticket = age <= 10
     ? 'Ticket free'
     : (age >= 11 && age < 18)
     ? '50% discount'
     : (age >= 60)
     ? '15% discount'
     : 'Regular ticket 800';

console.log('Ticket price:',ticket);
