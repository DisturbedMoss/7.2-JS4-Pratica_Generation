const leia = require("readline-sync")

let vetor = [], impares = [], pares = [], soma = 0;

for(let i = 0; i < 10; i++){
    vetor[i] = leia.questionInt(`Vetor[${i}]: `)

    if(i%2 != 0)
        impares.push(vetor[i]);        
    
    if(vetor[i]%2 == 0) pares.push(vetor[i]);

    soma = soma + vetor[i];
}

console.log(`
    \nElementos nos índices ímpares:\n
    ${impares}\n
    Elementos pares:\n
    ${pares}\n
    Soma: ${soma}\n
    Média: ${(soma/10).toFixed(2)}
`)