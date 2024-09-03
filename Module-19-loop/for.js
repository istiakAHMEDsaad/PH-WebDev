console.log("\n--------------------Task1--------------------\n");
// Task 1
let i1 = 0;
console.log(
  "-----I will invest at least 6 hrs every single day for next 60 days!, this message 60 times. So display this-----\n"
);
while (i1 < 60) {
  console.log(
    `${i1 + 1}. I will invest at least 6 hrs every single day for next 60 days!`
  );
  i1++;
}

// Task 2
console.log("\n--------------------Task2--------------------\n");
// subtask 1
let i2 = 61;
console.log("Find all the odd numbers from 61 to 100 -->");
for (i2; i2 <= 100; i2++) {
  if (i2 % 2 != 0) {
    console.log(i2);
  }
}

// subtask 2
let i3 = 78;
console.log("Find all the even numbers from 78 to 98 -->");
for (i3; i3 <= 98; i3++) {
  if (i3 % 2 == 0) {
    console.log(i3);
  }
}

// Task 3
console.log("\n--------------------Task3--------------------\n");
// subtask 1
let i4 = 91;
let sum1 = 0;
console.log("Find all the odd numbers from 91 to 129 -->");
for (i4; i4 <= 129; i4++) {
  if (i4 % 2 != 0) {
    console.log(i4);
    sum1 += i4;
  }
}
console.log("Display sum of all the odd numbers from 91 to 129:", sum1, "\n");

// subtask 2
let i5 = 51;
let sum2 = 0;
console.log("Display sum of all the even numbers from 51 to 85 -->");
for (i5; i5 <= 85; i5++) {
  if (i5 % 2 == 0) {
    console.log(i5);
    sum2 += i5;
  }
}
console.log("Display sum of all the even numbers from 51 to 85:", sum2, "\n");


// Task 4
console.log("\n--------------------Task4--------------------\n");
let i6 = 1;
let sum3 = 0;
for (i6; i6 <= 10; i6++) {
  sum3 = 9 * i6; // sum = 9 * 1(i = 1,2,3,4,5,6,7,8,9,10)
  console.log(`${9} * ${i6} = ${sum3}`);
}


// Task 5
console.log("\n--------------------Task5--------------------\n");
let i7=81;
for(i7; i7>=65; i7--){
    console.log(i7);
}