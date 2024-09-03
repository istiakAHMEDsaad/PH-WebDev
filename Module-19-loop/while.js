// Task 1
console.log(
  "I will invest at least 6 hrs every single day for next 60 days!, this message 60 times. So display this"
);
// sub task 1
console.log("\nFind all the odd numbers from 61 to 100 -->\n");
let i = 61;
while (i <= 100) {
  if (i % 2 != 0) {
    console.log(i);
  }
  i++;
}
// sub task 2
console.log("\nFind all the odd numbers from 61 to 100 -->\n");
let i2 = 78;
while (i2 <= 98) {
  if (i2 % 2 == 0) {
    console.log(i2);
  }
  i2++;
}

// Task 3
console.log("\n----------------Taks 3----------------\n");
// sub task 1
console.log("Find all the odd numbers from 91 to 129 -->");
let i3 = 91;
let sum = 0;
while (i3 <= 129) {
  if (i3 % 2 != 0) {
    console.log(i3);
    sum += i3;
  }
  i3++;
}
console.log("Display sum of all the odd numbers from 91 to 129:", sum, "\n");
// sub task 2
console.log("Display sum of all the even numbers from 51 to 85 -->");
let i4=51;
let sum2 = 0;
while(i4<=85){
  if(i4%2==0){
    console.log(i4);
    sum2+=i4;
  }
  i4++;
}
console.log("Display sum of all the even numbers from 51 to 85:", sum2, "\n");


// Task 4
console.log("\n----------------Taks 4----------------\n");
console.log("Generate a multiplication table for number 5");
let i5 = 0;
let sum3 = 0;
while(i5<=10){
  sum3=5*i5;
  console.log(`${i5} * ${5} = ${sum3}`);
  i5++;
}


// Task 5
console.log("\n----------------Taks 5----------------\n");
console.log("countdown timer that counts down from 21 to 15 -->");
let i6=21;
let sum4=0;
while(i6>=15){
  console.log(i6);
  i6--;
}