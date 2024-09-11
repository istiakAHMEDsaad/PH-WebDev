const arrOne = Object.keys(mobile);
console.log(arrOne);
const arrTwo = Object.values(mobile);
console.log(arrTwo);

for (const lebu of arrOne) {
  console.log(lebu, ":", mobile[lebu]);
}
