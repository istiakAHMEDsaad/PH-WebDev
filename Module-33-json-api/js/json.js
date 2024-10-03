console.log('----------Task 1----------\n');
const user = {
  id: 1,
  name: 'jobbar ali',
  job: 'actor',
};
const userStringify = JSON.stringify(user);
console.log(user);
console.log(userStringify);

console.log('\n----------Task 2----------\n');
const shop = {
  owner: 'Jhon',
  address: {
    street: 'vuter goli',
    city: 'dhaka',
    country: 'bangladesh',
  },
  products: ['chaku', 'chapati', 'ramda', 'gear', 'dildo'],
  revenue: 100000,
  isOpen: true,
  isNew: false,
};
const shopStringify = JSON.stringify(shop);
console.log(shopStringify);

console.log('\n----------Task 3----------\n');
const userTurnParse = JSON.parse(userStringify);
console.log(userTurnParse);
