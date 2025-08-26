const leia = require("readline-sync")

let idade = 0, menores = 0, maiores = 0;

while (idade >= 0) {
    idade = leia.questionInt("Digite uma idade: ")

    if(idade < 21 && idade >= 0) menores++
        else if(idade > 50 && idade >= 0) maiores++
}



console.log(`Total de pessoas menores de 21 anos: ${menores}`)
console.log(`Total de pessoas maiores de 50 anos: ${maiores}`)