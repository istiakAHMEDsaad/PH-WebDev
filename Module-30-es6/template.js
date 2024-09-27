console.log('----------num1----------\n');
function printMe(day){
    const something = console.log(`Ami vaat khabo na ${day} din dhore`);
    return something;
}
printMe(7);


//* funtion expression
console.log('\n----------num2----------\n');
const mySum = function(num1, num2){
    return num1+num2;
}
console.log(`Total sum ${mySum(10, 20)} :-)`);


//* Arrow function is fun
console.log('\n----------num3----------\n');
const mySubs = (num1, num2) => num1-num2;
console.log(`Substart: ${mySubs(50, 43)}`);


console.log('\n----------num4----------\n');
const emptyString = () => console.log('Life is empty :(');
emptyString();


//! arrow function don't have any this pointer
console.log('\n----------num5----------\n');
let mySelf = {
    name: 'Saad',
    printName: () => {
        console.log(`My name is ${this.name} :(`);
    },
    age: 20
};
console.log(mySelf.printName());



//* normal function have their own this pointer
console.log('\n----------num6----------\n');
let mymySelf = {
    name: 'Tajrin',
    printprintName(){
        console.log(`Her name is ${this.name} :)`);
    },
    age: 20
};
console.log(mymySelf.printprintName());



//* arrow object return
console.log('\n----------num7----------\n');
const myObj = {
    name: 'boka roton',
    age2: 32,
};
const myAge = (ageNum) => ageNum.age2;
console.log(`My age number is: ${myAge(myObj)}`);



//* arrow array return
console.log('\n----------num8----------\n');
const arrOne = ['jorina', 'sokina', 'sodor uddin', 'bordor uddin'];
const arrNam = (arr) => arr[2];
console.log(`3rd array index is: ${arrNam(arrOne)}`);



//* no parameter
console.log('\n----------num9----------\n');
const myPI = (num) => Math.PI * num;
console.log(`Yamete pi: ${myPI(10)}`);



//* large arrow function
console.log('\n----------num10----------\n');
const chainMath = (a, b, c) => {
    const doSum = (a+b+c);
    const doSubs = (a-b-c);
    const sumSub = (doSum + doSubs);

    return sumSub;
}
console.log(`Chain method pagla: ${chainMath(10, 20, 30)}`);




//* check this pointer
console.log('\n----------num11----------\n');
const bigObj = {
    value: 8,
    arrowFunction: () => {
        console.log(this.value);
    },
    regularFunction: function () {
        console.log(this.value);
    },
};
console.log(`Arrow function this pointer: ${bigObj.arrowFunction()}`);
console.log(`Regular function this pointer: ${bigObj.regularFunction()}`);