const num = 10;
function printString() {
  console.log("normal 🙄");
}
printString();

// small function
function sum(a, b) {
  const result = a + b;
  return result;
}
const sumTotal = sum(5, 5);
console.log(`a + b = ${sumTotal}`);

// Loop function
function loop1to10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
loop1to10();

// small condition
function conditionSmall() {
  let age = 18;
  if (age <= 18) {
    console.log("Adult 18+");
  } else {
    console.log("Under aged");
  }
}
conditionSmall();

// Macher function
console.log("\n--------------Ilisher-Torkari--------------\n");
function curry(fish, vegetable, others) {
  console.log(`Fish: ${fish}`);
  console.log(`Vegetable: ${vegetable}`);
  console.log(`Others: ${others}`);
  return "Curry finished";
}
const result = curry("Ilish", "Alu", "Lobon");
console.log(result);

// Roll dice
function rollDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
}
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();
