let heros = [["ironman","spiderman","thor"], ["superman", "wonder woman", "flash"]];
for(let i=0; i<heros.length; i++){
    console.log(`List ${i+1}`);
    for(let j=0;j<heros[i].length;j++){
        console.log(`Heros: ${heros[i][j]}`);
    }
}
