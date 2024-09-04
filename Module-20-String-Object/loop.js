const mobile = {
  brand: "samsung",
  price: 25000,
  color: "black",
  camera: "12mp",
};

for (const teMp in mobile) {
  console.log(teMp);
  console.log(mobile[teMp]);
}

const arrOne = Object.keys(mobile);
console.log(arrOne);
const arrTwo = Object.values(mobile);
console.log(arrTwo);

for (const lebu of arrOne) {
  console.log(lebu, ":", mobile[lebu]);
}
