// Power ^ Power
function squarE(num) {
  console.log(`${num}^${num} = ${Math.pow(num, num)}`);
}
squarE(4);

// Add number
function addSum(a, b) {
  let sum = a + b;
  console.log(`Sum of (${a} + ${b}) = ${sum}`);
}
addSum(13, 7);

// Pass by name
function passByName(name){
    console.log(`Pass your name: ${name}`);
}
passByName("Saad");

// Average value:
function avgVal(num1, num2, num3){
    let val = ((num1+num2+num3)/3).toPrecision(4);
    console.log(`Average of three number is: ${val}`);
}
avgVal(3.5, 3.6, 3.4);

// Multiplication table
function multiTable(num){
    for(let i=num;i<=num*10;i+=num){
        console.log(`${num} * ${i} = ${i}`);
    }
}
multiTable(2);