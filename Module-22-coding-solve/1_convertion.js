// 1ft = 12inch
console.log("----------Feet to Inch----------");
function feetInch(value) {
  const calc = value * 12;
  return calc;
}
const output = feetInch(5.6);
console.log("Inch:", output.toPrecision(4));


console.log("\n----------Inch to Feet----------");
// print feet and inch both
function feetToInch(value) {
  const fractionVal = value / 12;
  const feetNum = parseInt(fractionVal);
  const inchNum = value % 12;
  const result = `${feetNum}ft ${inchNum}inch`;
  return result;
}
const showFeet = feetToInch(66);
console.log(showFeet);


// 1 Miles to 1.60934 K.m
console.log("\n----------Mile to Kilometer----------");
function kmToMile(value){
    const convertVal = value / 1.60934;
    const val = convertVal;
    return val;
}
const convertedValue = kmToMile(10);
console.log("Mile:",convertedValue.toPrecision(3));
