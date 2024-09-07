function returnEven(arrVal) {
  const pushVal = [];
  //   let sum = 0;
  for (const loopVal of arrVal) {
    if (loopVal % 2 === 0) {
      // console.log(loopVal);
      pushVal.push(loopVal);
      // sum+=loopVal;
    }
  }
  return pushVal;
  //   return sum;
}

let arrVal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let output = returnEven(arrVal);
console.log("Even number:", output);

function prepareJuice(fruit) {
  return fruit;
}
let serveJuice = prepareJuice("Tormuj");
console.log(serveJuice);
