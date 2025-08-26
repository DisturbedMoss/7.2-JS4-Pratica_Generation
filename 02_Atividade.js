const leia = require("readline-sync")

let vetor = [], pares = 0, impares = 0;

for(let i = 0; i < 10; i++){
    vetor[i] = leia.questionInt(`Digite o ${i+1} numero: `)

    if(vetor[i]%2 == 0){
        pares++;
    }else{
        impares++
    }
}

console.log(`\nTotal de números pares: ${pares}\nTotal de números ímpares: ${impares}`);