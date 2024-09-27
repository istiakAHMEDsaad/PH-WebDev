/**
 * If default value is not define it'll show undefine value
 * if default value is set it will show the missing value
 * if default value set and also two parameter is provided it will prioritize
 */
function add(num1, num2 = 5){
    const result = (num1+num2);
    console.log('sum of two number:',result);
    return result;
}
const sum = add(2);

function myName(firstName, lastName = ''){
    const fullName = (firstName + ' ' + lastName);
    return fullName;
}

console.log(myName('Istiak'));
