let myName = {
  name: "Saad",
  age: 22,
  adds: "Mohammad pur",
  moba: 1234,
  "gosto khai": ["goru", "mohish", "vera", "chagol"],
};
console.log(myName.name);
console.log(myName["adds"]);
console.log(myName["gosto khai"]);

console.log("\n");
let valaLaptop = {
  model: "hx-29iO4-DHc",
  cpu: "i5 12gen",
  ram: "16gb ddr4",
  gpu: "arc a750",
  display: "fhd",
};
let objDekhabo = Object.keys(valaLaptop);
let keyDekhabo = Object.values(valaLaptop);
console.log(objDekhabo);
console.log(keyDekhabo);

// nested
let scl = {
  name: "vikarunnesa",
  class: "10, 11, 12",
  event: ["Science fari", "Bijoy dibosh", "21 feb"],
  uniqe: {
    color: "red",
    gpa: 3.5,
    resul: {
      merit: "med",
      emin: "bal"
    },
  },
};
scl.uniqe.resul.merit = "oto valo na tobe chole";
console.log(scl.uniqe.resul["emin"]);