const glass = {
  name: 'golden glass',
  color: 'golden',
  price: 32000,
  isClean: true,
  mucheDe: 'na muchish na mama',
  deleteMe: 'oi amare marish na pls',
};

// console.log(glass);
// taking the keys & values
const objKeys = Object.keys(glass);
const objValue = Object.values(glass);
console.log(objKeys);
console.log(objValue);


// showing pair value
const objAndKey = Object.entries(glass);
console.log(objAndKey);


// Delte destructor
const {mucheDe, ...rest} = glass;
console.log(rest);

// Delete keys
delete glass.deleteMe;
console.log(glass);


// freez process
Object.freeze(glass);