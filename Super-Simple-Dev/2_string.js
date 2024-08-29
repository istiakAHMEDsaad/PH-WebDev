/* let value = 'green';
if((value === 'red') || (value === 'yellow') || (value === 'green')){
    if(value === 'red'){
        console.log('Stop the car');
    }
    else if(value === 'yellow'){
        console.log('Slow down');
    }
    else if(value === 'green'){
        console.log('You can go');
    }
}
else{
    console.log('invalid value');
} */
let value = prompt('Enter number:\n1. Red\n2. Yellow\n3. Green');
if((value === '1') || (value === '2') || (value === '3')){
    if(value === '1'){
        prompt('Stop your car right now!');
    }
    else if(value === '2'){
        prompt('Slow down your vehicle!');
    }
    else if(value === '3'){
        prompt('Start your vehicle');
    }
}
else{
    prompt('Invalid keyword');
}