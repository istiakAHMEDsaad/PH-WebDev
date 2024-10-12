const person = {
  name: 'lal miya',
  age: 13,
  profession: 'painter',
};

const personString = JSON.stringify(person);

console.log(typeof personString);
const parsePerson = JSON.parse(personString);
console.log(typeof parsePerson);

console.log(parsePerson.name);
