for (char of "saad") {
  console.log(char);
}

let hero = [
  ["ironman", "spiderman", "thor"],
  ["superman", "wonder woman", "flash"],
];
for (const list of hero) {
  for (const listList of list) {
    console.log(listList);
  }
}
