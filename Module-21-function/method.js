const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
};

console.log(calculator);
console.log("For add function:", calculator.add(5, 5));
console.log("For sub function:", calculator.sub(10, 5));
console.log("For mul function:", (calculator.mul(10, Math.PI).toFixed(2)));
console.log("For div function:", calculator.div(100, 10));
