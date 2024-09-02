// For
for (let i = 0; i < 5; i++) {
  console.log(`${i + 1}. I love you`);
}
console.log(`---------------------------- \n`);
for (let i = 0; i < 5; i++) {
  console.log(`${i + 1}. Tajrin hate me so much :'-(`);
}

console.log(`---------------------------- \n`);
// While
let nume = 0;
while (nume <= 10) {
  console.log(`${nume + 1}. Unnoyon bal amar`);
  nume++;
}
console.log(`---------------------------- \n`);
let num = 0;
while (num <= 9) {
  console.log(`Number ${num + 1}`);
  num++;
}

// Array loop
console.log(`---------------------------- \n`);
let arrOne = ["Shoni", "Robi", "Shom"];
for (const din of arrOne) {
  console.log(din);
}

// Sum of array
let i = 1;
let sum = 0;
for (i = 1; i <= 3; i++) {
  sum = sum + i;
}
console.log(sum);
console.log(`---------------------------- \n`);
let j = 1;
let sum1 = 0;
while (j <= 3) {
  console.log(`old: ${j}`);
  sum1 += j;
  console.log(`sum: ${sum1}`);
  j++;
}

console.log(`---------------------------- \n`);
// Sum of even
/* let i2=0;
while(i2%2==0 <= 10){
    console.log(i2);
    i2++;
} */
let a = 1;
let sum2 = 0;
while (a <= 10) {
  if (a % 2 == 0) {
    console.log(`show: ${a}`);
    sum2 += a;
    console.log(sum2);
  }
  a++;
}
console.log(`---------------------------- \n`);
let l1 = 0;
let sum3 = 0;
while (l1 <= 10) {
  if (l1 % 2 != 0) {
    console.log(`odd: ${l1}`);
    sum3 += l1;
    console.log(sum3);
  }
  l1++;
}


// While loop
console.log(`---------------------------- \n`);
let a1 = 0;
let b1 = 0;
let c1 = 0;
while (a1 <= 5) {
  if (a1 % 2 == 0) {
    console.log(`Even: ${a1}`);
    b1 += a1;
  } else {
    console.log(`Odd: ${a1}`);
    c1 += a1;
  }

  a1++;
}
console.log(`Sum of the even: ${b1}`);
console.log(`Sum of the odd: ${c1}`);


// For Loop
console.log(`---------------------------- \n`);
let evenSum = 0;
let oddSum = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
    evenSum += i;
  } else {
    console.log(i + " is odd");
    oddSum += i;
  }
}

console.log("Sum of even numbers:", evenSum);
console.log("Sum of odd numbers:", oddSum);

console.log(`---------------------------- \n`);
// 200 to 250
let i3 = 200;
let sum4 = 0;
while(i3<=250){
  sum4+=i3;
  i3++;
}
console.log('Sum of 200 to 250 is:',sum4);


// Decrement
console.log(`---------------------------- \n`);
let i4 = 10;
let sum5 = 0;
console.log(`Reverse value 10:`);
while(i4>=0){
  console.log(i4);
  sum5+=i4;
  i4--;
}
console.log('Reverse value sum:',sum5);

// 20 - 11
let i5 = 0;
