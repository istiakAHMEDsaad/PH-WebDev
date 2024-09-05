// Task 1
console.log("\n--------------------Task 1--------------------\n");
console.log(
  "<-- Write a loop 1 to 200. Use break to exit the loop once you find 100. -->"
);
let i = 1;
for (i; i <= 200; i++) {
  console.log(i);
  if (i >= 100) {
    break;
  }
}

// Task 2
console.log("\n--------------------Task 2--------------------\n");
let i2 = 1;
let sum = 0;
while(i2<=150){
    if(i2>50){
        break;
    }
    sum += i2;
    console.log(i2);
    i2++;
}
console.log(`Sum: ${sum}`); 


// Task 3
/* console.log("\n--------------------Task 3--------------------\n");
let i3 = 1;
while (i3 <= 100) {
  i3++;
  if (Math.sqrt(i3) % 1 === 0) {
    console.log(`ignore square: ${i3}`);
    break;
  }
} */
