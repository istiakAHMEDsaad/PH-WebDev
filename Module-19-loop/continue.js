let i=0;
console.log("\n-------------------Task1-------------------\n");
while(i<=40){
    i++;
    if(i%2!=0){
        continue;
    }
    console.log(i);
}

console.log("\n-------------------Task2-------------------\n")
let j=55;
console.log("skip the numbers divisible by 5 -->");
for(j;j<=85;j++){
    j++;
    if(j%5==0){
        continue;
    }
    console.log(j);
}