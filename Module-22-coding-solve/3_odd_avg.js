function oddAvg(value) {
  let valueSort = value.sort(function (a, b) {
    return a - b;
  });
  let sumOdd = 0;
  for (const loopVal of valueSort) {
    if (loopVal % 2 !== 0) {
      console.log(loopVal);
      sumOdd += loopVal;
    }
  }
  return sumOdd;
}
let value = [10, 13, 30, 19, 24, 5, 28];
let sumOdd = oddAvg(value);
console.log("Sum of odd:", sumOdd);
