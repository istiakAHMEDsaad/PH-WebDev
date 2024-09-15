const greet = "Hello";
let name;
function changeGreet() {
  let greet = "Hola";
  console.log(greet);
  function innerGreet() {
    console.log(greet);
  }
}
console.log(greet);
changeGreet();

// Higher Order
function multipleGreet(func ,value) {
  for (let i = 1; i <= value; i++) {
    console.log(i);
    func();
  }
}
let normalGreet = function () {
  console.log("Hey this is me");
};

multipleGreet(normalGreet, 5);
