// Task 1
let myName = 'Istiak Ahmed Saad';
console.log(myName.length);
// Task 2
let firstName = 'Istiak';
console.log(firstName[0]);
// Task3
console.log(firstName[firstName.length-1]);
// Task4
console.log('programming hero' + 10);
// Task5

let nullSpace = ' ';
console.log(nullSpace.length)


// Supersimple Dev Javascript Course!
let socks = 10.90;
let basketBall = 20.95;
let shipping = 4.99;
let extraTax = 4.77;

let totalItems = ((socks*2) + (basketBall));
console.log('Items cost:', totalItems);
let shippingCost = (totalItems + shipping);
console.log('Shipping handle(9.98$):',shippingCost);
let shippingTax = (shippingCost * 0.1);
let totalCost = (shippingCost + shippingTax);
console.log('tax(10%):', shippingTax.toFixed(2));
console.log('Total[shipping + tax]:', totalCost.toFixed(2));