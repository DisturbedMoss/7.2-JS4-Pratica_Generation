const leia = require("readline-sync")

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]

let numero = leia.questionInt("Digite um numero: "), key

for(let i = 0; i < 10; i++){
    if(numero == vetor[i]){
        console.log(`\nO número ${numero} está localizado na posição: ${i}`)
        key = 1
    }
        else if(i == 9 && key != 1) console.log(`\nO número ${numero} não foi encontrado!`)
}