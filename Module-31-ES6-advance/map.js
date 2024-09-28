console.log('----------Number 1----------\n');
const numbers = [5, 3, 7, 2, 1, 12, 43, 2, 32];
const double = [];
for (const number of numbers) {
  const doubles = number * 2;
  double.push(doubles);
}
console.log(double);


console.log('\n----------Number 2----------\n');
const oddNum = [17, 9, 15, 3, 7, 13, 5, 3];
const oddMe = (num) => num * 2;
const res = oddNum.map(oddMe);
console.log(res);


console.log('\n----------Number 3----------\n');
const evenNum = [...oddNum];
evenNum.push(2, 8, 99);
const evenMe = evenNum.map((num) => num * 2);
console.log(`Even number double: ${evenMe}`);


console.log('\n----------Number 4----------\n');
const sumNum = [0, 5, 10, 15, 20];
const sumMe = sumNum.map((num) => num + 5);
console.log(`5 increament: ${sumMe}`);



console.log('\n----------Number 5----------\n');
const friend = ['rina', 'mina', 'tina', 'ina', 'rinu'];
const friendNum = friend.map((fdName) => fdName.length);
console.log(friendNum);
const friendFirstName = friend.map((fdName) => fdName[0]);
console.log(friendFirstName);