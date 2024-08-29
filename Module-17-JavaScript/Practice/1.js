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
console.log('\n');

// Task 2a
console.log('---------------Task 2A---------------');
let soupPrice = 10;
let burgerPrice = 8;
let icePrice = 5;
let totalCost1 = (soupPrice + (burgerPrice * 3) + icePrice);
console.log(`Toatl Cost: ${totalCost1}$\n`);

// Task 2b
console.log('---------------Task 2B---------------');
console.log(`Three person order total cost: ${(totalCost1*3).toFixed(2)}$`);
console.log(`Per person avg cost: ${((totalCost1*3) / 3).toFixed(2)}$\n`);

// Task 2c
console.log('---------------Task 2C---------------');
let tosterPrice = 18.50;
let shirtPrice = 7.50;
let totalCost2 = tosterPrice + (2 * shirtPrice);
console.log(`Total price: ${totalCost2}$\n`);

// Task 2d
console.log('---------------Task 2D---------------');
let tax = totalCost2 * 0.1;
console.log(`10% of tax: ${tax.toFixed(2)}$`);
console.log(`Total price with 10% of tax: ${tax + totalCost2}$\n`);

// Task 2e
console.log('---------------Task 2E---------------');
let tax2 = totalCost2 * 0.2;
console.log(`20% of tax: ${tax2}$`);
console.log(`Final price: ${(totalCost2 + tax2).toFixed(2)}$\n`);
