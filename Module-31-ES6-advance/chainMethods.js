// Destructruing object
console.log('----------number1----------\n');
const {name, food, milking} = {
    name: 'chagol',
    food: 'ghash pata',
    milking: true,
};
console.log(milking);


console.log('\n----------number2----------\n');
// Destructruing array
const [a, b, c, d, ...rest] = ['modu', 'jodu', 'kodu', 'rodu', 'lubu', 'kubu', 'runu', 'dudu', 'nunu', 'pumu'];
console.log(`a. ${a}\nb. ${b}\nc. ${c}\nd. ${d}`);
console.log(`rest of array obj: ${rest}`);


console.log('\n----------number3----------\n');
const data = [
    {
        id: 1,
        name: 'abul',
        add: 'kochu khet',
    },
];
console.log(data[0].name);



console.log('\n----------number4----------\n');
const products = {
    count: 5000,
    data: [
        {
            id:1,
            vendor: 'lenevo laptop',
            price: 65000,
        },
        {
            id: 2,
            vendor: 'apple',
            price: 165000,
        },
    ],
};
console.log(`${products.data[0].vendor} price is: ${products.data[0].price}`);



const user = {
    id: 5001,
    name: 'Shoriful raj',
    address: {
        street: {
            first: '51/1 uttora side',
            second: 'poribag er goli',
            third: 'nodorai',
        },
    },
};
console.log(`User third location is: ${user.address.street.second}`);

const user2 = {
    id: 5002,
    name: 'pori bibir majar',
    address: {
        city: 'chittagong',
        country: 'Bangladesh'
    }
}
console.log(`User third location is: ${user2.address.street?.second}`);
console.log(`User third location is: ${user.address.street?.second}`);