const leia = require("readline-sync")

let numero, totalNumero = 0, somaNumero = 0;

do {
    numero = leia.questionInt("Digite um numero: ")

    if(numero%3 == 0 && numero != 0) {
        totalNumero++;
        somaNumero = somaNumero + numero;
    }
    key = 1;
} while (numero != 0);

console.log(`A média de todos os números múltiplos de 3 é: ${(somaNumero/totalNumero).toFixed(2)}`)