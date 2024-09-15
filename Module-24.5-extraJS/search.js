const phones = [
  {
    id: 1,
    name: "xiaomi",
    price: 14000,
  },
  {
    id: 2,
    name: "samsung",
    price: 16000,
  },
  {
    id: 3,
    name: "nokia",
    price: 7500,
  },
  {
    id: 4,
    name: "htc",
    price: 23000,
  },
  {
    id: 5,
    name: "realme",
    price: 18000,
  },
];

/* for(const phone of phones){
    console.log(phone);
} */

function searchProduct(phones, search) {
    const matched = [];
    for(const phone of phones){
        if(phone.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(phone);
        }
    }
    return matched;
}

const output = searchProduct(phones, "realme");
console.log(output);