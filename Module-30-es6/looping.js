const numbers = [1, 6, 8, 4];
for(const number of numbers){
    console.log(number);
}

const pcComponants = {
    cpu: 'ryzen 3 3600',
    gpu: 'gtx 1660 super',
    ram: '16 gb',
    ssd: '256 gb',
};

for(const pcComponant in pcComponants){
    console.log(pcComponant);
}