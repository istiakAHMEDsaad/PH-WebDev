const height = [54, 63,  66, 10 ,68, 72, 60, 69]
function getMaxValue(nums){
    let max = nums[0];
    for(const num of nums){
        if(num>max){
            max=num;
        }
    }
    return max;
}
let max = getMaxValue(height);
console.log("Max value:",max);
