const leia = require("readline-sync")

let continuar = true, idade, genero, dev, totalDevBack = 0, totalMulher = 0, totalHomem = 0, totalNBin = 0, totalPessoas = 0, totalIdade = 0;

while (continuar == true) {
    idade = leia.questionInt("Idade: ")
    genero = leia.questionInt("Identidade de Genero: ")
    dev = leia.questionInt("Pessoa Desenvolvedora: ")

    if(genero == 1 || genero == 4 && dev == 2){
        totalMulher++;
    }else if(genero == 2 || genero == 5 && dev == 3 && idade > 40){
        totalHomem++;
    }else if(genero == 3 && dev == 4 && idade < 30){
        totalNBin++;
    }

    if(dev == 1) totalDevBack++;

    totalPessoas++;

    totalIdade = totalIdade + idade;

    continuar = leia.keyInYNStrict("Deseja continuar? (Y/N)")
}

console.log(`
    \nTotal de pessoas desenvolvedoras Backend: ${totalPessoas}\n
    Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${totalMulher}\n
    Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${totalHomem}\n
    Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${totalNBin}\n
    O número total de pessoas que responderam à pesquisa: ${totalPessoas}\n
    A média de idade das pessoas que responderam à pesquisa: ${(totalIdade/totalPessoas).toFixed(2)}
    `)