console.log('first');
console.log('second');

// clearTimeout
setTimeout(() => {
  console.log(3);
}, 3000);

console.log('fourth');
console.log('fifth');

let num = 0;
const intervalId = setInterval(() => {
    num++;
    console.log(`countdown: ${num}`);
    if(num>=60){
        clearInterval(intervalId)
    }
}, 1000)
