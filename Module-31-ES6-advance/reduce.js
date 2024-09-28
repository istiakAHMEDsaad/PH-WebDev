const numbers = [3, 1, 4, 6, 5, 7, 8, 19, 13];
const totalCost = numbers.reduce((num1, num2) => num1 + num2, 0);
console.log(`Total sum: ${totalCost}`);

const medCost = [230, 400, 1900, 4200, 300];
const totalCost2 = medCost.reduce((itemOne, itemTwo) => itemOne + itemTwo, 0);
console.log(`Total Cost: ${totalCost2}`);




