function woodNeed (needChair, needKhat, needTable){
    const forChair = 5;
    const forKhat = 50;
    const forTable = 15;

    const chairMade = needChair * forChair;
    const khatMade = needKhat * forKhat;
    const tableMade = needTable * forTable;

    const totalWood = chairMade + khatMade + tableMade;
    const avgWood = totalWood / 3;

    const temp = console.log(`Wood need for chair(${needChair}) is ${chairMade}\nWood need for khat(${needKhat}) is ${khatMade}\nWood need for chair(${needTable}) is ${tableMade}\nAverage cost: ${avgWood.toPrecision(4)}`);

    return temp;
}

woodNeed(0, 1, 0);