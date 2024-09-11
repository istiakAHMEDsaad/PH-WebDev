const phonePriceArray = [20000, 16000, 50000, 100000, 12000, 30000, 35000];
function findCheapPhone(phone) {
  let min = phone[0];
  for (const phones of phone) {
    if (phones < min) {
      min = phones;
    }
  }
  return min;
}
const cheapPhone = findCheapPhone(phonePriceArray);
console.log("Cheap phone price:", cheapPhone);

// number 2
console.log("----------With object----------");
const phoneObjArray = [
  {
    name: "Samsung",
    price: 20000,
    camera: "12mp",
    color: "Black",
  },

  {
    name: "Xiaomi",
    price: 19000,
    camera: "16mp",
    color: "Metalic",
  },

  {
    name: "Oppo",
    price: 12000,
    camera: "8mp",
    color: "White",
  },

  {
    name: "Iphone",
    price: 50000,
    camera: "12mp",
    color: "Pink",
  },
];

function findObjPhone(arrayObj) {
  for (const arraysObj of arrayObj) {
    console.log(arraysObj);
  }
}
findObjPhone(phoneObjArray);
