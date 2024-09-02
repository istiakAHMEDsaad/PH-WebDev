// Question 1
let num = 69;
num % 2 === 0 ? console.log("Good") : console.log("Bad");

// Question 2
let name = prompt("Enter user name");
let age = prompt("Enter user age");
alert(`${name} is ${age} yesr old`);

// Question 3
let quarter = 3;
switch (quarter) {
  case 1:
    console.log(`January, February, March`);
    break;
  case 2:
    console.log(`April, May, June`);
    break;
  case 3:
    console.log(`July, Augest, September`);
    break;
  case 4:
    console.log(`October, November, December`);
    break;
  default:
    console.log("Quarter 1, 2, 3, 4 only");
}

// Question 4
let stringFive = "Apple";
stringFive[0] == "a" || (stringFive[0] == "A" && stringFive.length >= 5)
  ? console.log("Golden String")
  : console.log("Bad String");

// Question 5
let numbers = [1, 2, 3];
if (numbers[0] < numbers[1] && numbers[0] > numbers[2]) {
  console.log("Largest number:", numbers[1]);
} else if (numbers[0] > numbers[1] && numbers[1] > numbers[2]) {
  console.log("Largest number:", numbers[0]);
} else if (numbers[1] < numbers[2] && numbers[1] > numbers[0]) {
  console.log("Largest number:", numbers[2]);
} else if (numbers[1] > numbers[2] && numbers[2] > numbers[0]) {
  console.log("Largest number:", numbers[1]);
} else if (numbers[0] > numbers[2] && numbers[2] < numbers[1]) {
  console.log("Largest number:", numbers[0]);
} else if (numbers[0] < numbers[2] && numbers[0] > numbers[1]) {
  console.log("Largest number:", numbers[2]);
} else {
  console.log("***");
}

// Question 6(bonus)
/* Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit.
Eg: 32 and 47852 have the same last digit i.e. 2
*/
let num1 = "32";
let num2 = "47852";
if (num1[num1.length - 1] == num2[num2.length - 1]) {
  console.log("Last two digit same!");
} else {
  console.log("Last two digit is not same");
}

let num3 = 32 % 10;
let num4 = 47852 % 10;
if (num3 == num4) {
  console.log("same");
} else {
  console.log("diff");
}
