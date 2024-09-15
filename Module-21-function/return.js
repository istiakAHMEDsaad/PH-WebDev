/* function divideVal(age1, age2) {
  const ageGap = age1 - age2;
  return ageGap;
}
const output = divideVal(28, 3);
console.log(`Age gap: ${output}`);

console.log("------------------------");

function sum(x, y) {
  return x + y;
}
console.log("Sum:", sum(21, 64));

console.log("------------------------");

function cutHalf(num) {
  const half = num / 2;
  return half;
}
const returnVal = cutHalf(50);
console.log("Divided value:", returnVal); */

// return with good quality
console.log("\n---------------Apna College---------------\n");

function oddEvenFactory(value) {
  if (value == "even") {
    let even = function (number) {
      console.log(number % 2 === 0);
    };
    return even;
  } else if (value == "odd") {
    let odd = function (number) {
      console.log(number % 2 !== 0);
    };
    return odd;
  } else {
    console.log("Invalid Request!");
  }
}
let func = oddEvenFactory("odd");
// func;
func(3);