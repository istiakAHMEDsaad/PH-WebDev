function sumOfArrayNumber(number) {
    let sum=0;    
    for(const numLoop of number){
        console.log(numLoop);
        sum+=numLoop;
    }
    return sum;
}
let passVal = [1, 2, 3, 4, 5];
const output = sumOfArrayNumber(passVal);
console.log("Grand total:",output);
