const leia = require("readline-sync")

let positivos = 0, numero = 0, i = 0

do {
    numero = leia.questionInt("Digite um numero: ")

    if(numero > 0) positivos = positivos + numero
    
    i++
} while (numero != 0);

console.log(`A soma dos numeros positivos é: ${positivos}`)