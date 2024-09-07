function duplicateFinder(pplArr) {
  const noDuplicate = [];
  for (const ppl of pplArr) {
    if (noDuplicate.includes(ppl) === false) {
      noDuplicate.push(ppl);
    }
  }
  return noDuplicate;
}

const pplArr = [
  "akib",
  "rakib",
  "jakib",
  "rabid",
  "rakib",
  "akib",
  "rokib",
  "ena",
  "mina",
  "tina",
  "rina",
  "mina",
];
const doubleNum = [1, 2, 3, 5, 6, 9, 2, 14, 20];
const finalArr = duplicateFinder(pplArr);
// const finalArr = duplicateFinder(doubleNum);
console.log("Kew double nibe na:", finalArr);
