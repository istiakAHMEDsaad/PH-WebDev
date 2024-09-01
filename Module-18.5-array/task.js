// Task 1
console.log('----------Task 1----------');
let arr1 = ['apple', 'orange', 'mango', 'lichi', 'jackfruit'];
console.log('Third index of the array is:', arr1[2]);
arr1[1] = 'jambura';
console.log(arr1,'\n');

// Task 2
console.log('----------Task 2----------');
let tourist = ['Coxes Bazar', 'Bandarban', 'Khagrachori'];
tourist.push('mohasthan gor');
tourist.push('saint martin', 'balushai');
tourist.pop();
console.log(tourist,'\n');

// Task 3
console.log('----------Task 3----------');
let book = ['Begum Rokeya', 'Brick Lane', 'The Black Coat'];
console.log(book.includes('The Black Coat'));
if(book.includes('Begum Rokeya') === true){
    console.log('The book exist\n');
}
else{
    console.log('Book dose not exist\n');
}

// Task 4
console.log('----------Task 3----------');
let varOne = [1, 2, 3];
let varTwo = 10;
console.log(`Variable one is ${Array.isArray(varOne)}`);
console.log(`Variable two is ${Array.isArray(varTwo)}`);

// Task 5
let arr3 = ['a', 'b', 'c', 'd'];
let arr4 = ['A', 'B', 'C', 'D'];
let arr5 = arr3.concat(arr4);
console.log('Old array 1 is:',arr3,'\n','Old array 2 is:', arr4,);
console.log('New concat array:',arr5);