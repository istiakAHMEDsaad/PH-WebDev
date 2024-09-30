// Try 1
console.log('----------Number 1----------\n');
class Product{
    constructor(name){
        this.name = name;
    }
    talkToME(talk){
        console.log(`Talk to me dear "${talk}"`);
    }
}

const notShout = new Product('muri khaw 😛');
console.log(notShout);
notShout.talkToME('sodorruddin');



console.log('\n----------Number 2----------\n');
// School teacher
class teacher{
    sirDoing(work){
        if(work === 'day'){
            console.log('Sir is teaching studnets');
        } else if(work === 'night'){
            console.log('Sir is sleeping');
        }else{
            console.log('Anything else');
        }
    }

    constructor(name, department, age){
        this.name = name;
        this.department = department;
        this.age = age;
    }
}
const ourSir = new teacher('Zhankar', 'Coding', 28);
console.log(ourSir);
console.log(ourSir.sirDoing('day'));