const weightKG = 72;
const heightFT = 5.6;
let convMt = heightFT * 0.3048;
let bmi = (weightKG / (convMt * convMt));
if(bmi != 0){
    if(bmi <= 18.4){
        console.log('Underweight');
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        console.log('Normal');
    }
    else if(bmi >= 25.0 && bmi <= 39.9){
        console.log('Overweight');
    }
    else{
        console.log('Obese');
    }
}
else{
    console.log('Invalid keword!');
}