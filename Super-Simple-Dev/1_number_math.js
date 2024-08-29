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

// Task 2f
console.log('---------------Task 2F---------------');
let tosterPrice1 = 18.99;
let basketPrice1 = 20.95;
let tshirtPrice1 = 7.99;
let totalCents = ((1899*2) + 2095 + 799) / 100;
console.log('Total cost:', totalCents,'$\n');

// Task 2g
console.log('---------------Task 2G---------------');
let shipping1 = (totalCents + 4.99);
console.log('Ship handle(4.99):',shipping1,'$\n');

// Task 2h
console.log('---------------Task 2H---------------');
let tax3 = (shipping1*0.1);
console.log('With 10% rounded tax:',Math.round(tax3),'$\n');


// Task 2i
console.log('---------------Task 2I---------------');
console.log('Total order:',(shipping1 + tax3),'$\n');

// Task 3j
console.log('---------------Task 2J---------------');
console.log('2.8 floor value: ',Math.floor(2.8),'\n');

// Task 2k
console.log('---------------Task 2K---------------');
console.log('2.8 ceil value: ',Math.ceil(2.8),'\n');

// Challenge Exercise

// Task 2l
console.log('---------------Task 2L---------------');
let tempCel = 25;
let tempFah = 86;
let tempCel1 = -5;
let farenHeit = (tempCel * 9/5) + 32;
let celSius = (tempFah - 32) * 5/9;
let farenHeit1 = (tempCel1 * 9/5) + 32;
console.log('25℃ to ℉:',farenHeit);
console.log('86℉ to ℃:',celSius);
console.log('-5℃ to ℉:',farenHeit1);