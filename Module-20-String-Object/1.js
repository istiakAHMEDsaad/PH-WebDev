// 20-2
console.log("\n20-2");
console.log("-----------------");
let myStr = "hey bal";
let myBal = myStr.toUpperCase();
console.log(myBal);
let var1 = "hey";
let var2 = "Hey";
if (var1.toLowerCase() == var2.toLowerCase()) {
  console.log("milche re bhai milche");
} else {
  console.log("mile nai 😥");
}

let water = " drink ";
let waterr = "  drink";
if (water.trim() === waterr.trim()) {
  console.log("pani khaw");
} else {
  console.log("mara khaw");
}

// 20-3
console.log("\n20-3");
console.log("-----------------");
let friendsStr = "Amr nam saad ami mari shudhu paad";
const fixFriend = friendsStr.split(" ");
console.log(fixFriend);
console.log(fixFriend.join());
console.log(fixFriend.join("|"));
console.log(fixFriend.join("-"));

let name1 = "abid";
let name2 = "nabid";
console.log(name1.concat(" ").concat(name2));

console.log(name1.includes("i"));

// 20-4
console.log("\n20-4");
console.log("-----------------");
let var3 = "ami badam khaite pari na kew khule daw";
let reVer = "";
for(const lett of var3){
    reVer = lett+reVer;
}
console.log(reVer);
let reVerr="";
for(let i=0;i<var3.length;i++){
    let letter = var3[i];
    reVerr=letter+reVerr;
}
console.log(reVerr);
const moiraJa = reVer.split("").reverse();
console.log(moiraJa);

let str="My Name Saad";
let revVal = "";
for(const reverseVal of str){
  revVal = reverseVal + revVal;
}
console.log(revVal);

let i9=0;
let revVal2 = "";
for(i9;i9<str.length;i9++){
  revVal2 = str[i9] + revVal2;
}
console.log(revVal2);