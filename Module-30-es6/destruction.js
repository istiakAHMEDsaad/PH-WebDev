const actor = {
    name: 'ananta',
    age: 30,
    moba: '0123456789',
    money: 999999999,
};

// if right side is an object left side of destructuring will be as well
// we can change default key name
const {name, age: boyosh, moba, money} = actor;
console.log(`Ananta bhai's number: ${moba} & age: ${boyosh}`);


// array destruction
const myArr = [2, 4, 6, 8, 10];
const [first, second] = myArr;
console.log(`first: ${first}, second: ${second}`);
const [x, y] = ['rina', 'mina'];
console.log(x, y);


// function
function doubleMe(num1, num2){
    return [num1*2, num2*2];
}
const [index1, index2] = doubleMe(2, 3);
console.log(`Array index1 is: ${index1}, Array index2 is: ${index2}`);



const myObj = {
    student: 'Saad',
    teacher: 'Jhankar',
};
const {student, teacher} = myObj;
console.log(`Student name: ${student}\nTeacher name: ${teacher}`);

let  {student: pupil, teacher: professor} = myObj;
pupil = 'Tajrin';
professor = 'Ahsan';
console.log(`Pupil name: ${pupil}\nProfessor name: ${professor}`);