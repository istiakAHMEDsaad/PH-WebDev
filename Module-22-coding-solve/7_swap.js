console.log("------Swap with temp val------");
let a = 5;
let b = 10;
console.log("before swap:", a, b);
const tempVal = a;
a = b;
b = tempVal;
console.log("after swap:", a, b);

console.log("\n------swap with array------");
let x = 10;
let y = 20;
console.log("before swap:", x, y);
[x, y] = [y, x];
console.log(x, y);
