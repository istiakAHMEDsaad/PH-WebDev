const products = [
    {
        id: 1,
        name: 'lenevo',
        price: 65000,
    },
    {
        id: 2,
        name: 'dell',
        price: 45000,
    },
    {
        id: 3,
        name: 'hp',
        price: 150000,
    },
];

// map
const productName = products.map((product) => product.name);
console.log(productName);

// for each
products.forEach((pId) => console.log(pId.id));

// filter
const filterProduct = products.filter((pPrice) => pPrice.price > 100000);
console.log(filterProduct);


// find
const findProduct = products.find((lowPrice) => lowPrice.price < 50000);
console.log(findProduct);


// reduce
const totalCost = products.reduce((flagValue, currentValue) => flagValue + currentValue.price, 0);
console.log(totalCost);