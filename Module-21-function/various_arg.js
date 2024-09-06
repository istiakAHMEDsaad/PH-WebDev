function evenSizeString(str) {
  const strLen = str.length;
  console.log(`City: ${str}, Lenght: ${strLen}`);
  if (strLen % 2 === 0) {
    console.log(`${str} city length is Even number`);
    return true;
  } else {
    console.log(`${str} city length is Odd number`);
    return false;
  }
}
evenSizeString("Dhaka");
evenSizeString("Bogura");

function sum(a, b) {
  return a + b;
}
console.log("Sum:", sum(sum(1, 2), 3));

console.log("-----------------------------");
function doDoubleTriple(number, doDouble) {
  if (doDouble === true) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}

const res = doDoubleTriple(2, true);
console.log(res);
console.log(doDoubleTriple(2, false));
