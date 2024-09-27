console.log('----------Task 1----------\n');
const maxValue = Math.max(10, 13, 20, 23, 56, 45, 25);
const myArr = [2, 4, 6, 26, 16, 12, 28, 32];
const maxMyArr = Math.max(...myArr);
// Get only array
console.log(myArr);
// Get only value
console.log(...myArr);
// Get max value
console.log(`Max number in array: ${maxValue}`);
// Get max value in array
console.log(maxMyArr);



// --------------Dosto--------------
const friend = [2, 5, 3, 7, 23];
const bondhu = friend;
bondhu.push(8);
// console.log(`Main friend ${friend}\nCopy frined ${bondhu}`);


//! --------------------now use spread operator--------------------
const bondhu2 = [...bondhu];
bondhu2.push(6);
console.log(`Main array ${friend}\nSecond copy ${bondhu} \nspread operator: ${bondhu2}`);

//  sperade operator notation
console.log('----------spread operator----------\n');  
let numbers = [3, 4, 5];
let allNumbers = [1, 2, ...numbers, 6, 7];
console.log(allNumbers);