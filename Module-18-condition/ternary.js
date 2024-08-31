// Condition ? true : flase
let age = 18;
age >= 18 ? console.log("You can vote") : console.log("You cant vote");

let leader = true;
leader == true ? console.log("free") : console.log("1000$");
let x = 5;
if (x < 10) {
  x = x + 3;
} else {
  x = x - 2;
}
console.log(x);


// Popcorn
let popcorn = 100;
let size = (popcorn == 250)
  ? 'Size XL'
  : (popcorn == 200)
  ? 'Size L'
  : (popcorn == 100)
  ? 'Size M'
  : (popcorn == 50)
  ? 'Size S'
  : 'Only 250, 200, 100, 50'
console.log(size);

// Good String
let stringVal = 'Apple';
let checkVal = (stringVal[0] == 'a') || (stringVal[0] == 'A')
  ? 'Good string'
  : 'Bad string'
console.log(checkVal);

// Check safe or unsafe value
let val = 10;
let checkVAL = ((val%3 === 0) && ((val+1 == 15) || (val-1 == 11)))
  ? 'Number Safe'
  : 'Number unsafe';
console.log(checkVAL);