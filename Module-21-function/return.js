function divideVal(age1, age2) {
  const ageGap = age1 - age2;
  return ageGap;
}
const output = divideVal(28, 3);
console.log(`Age gap: ${output}`);

console.log("------------------------");

function sum(x, y) {
  return x + y;
}
console.log("Sum:",sum(21, 64));

console.log("------------------------");

function cutHalf(num){
    const half = num/2;
    return half;
}
const returnVal = cutHalf(50);
console.log("Divided value:",returnVal);