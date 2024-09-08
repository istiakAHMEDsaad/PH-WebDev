function getMax(putMax1, putMax2){
    if(putMax1 > putMax2){
        return true;
    }
    else{
        return false;
    }
}
const putMax1 = 70;
const putMax2 = 85;
const finalMax = getMax(putMax1, putMax2);
console.log(finalMax);
// const finalMax2 = getMax(90, 80);
// console.log(finalMax2);