const leia = require("readline-sync")

let multiplo;

let num1 = leia.questionInt("Digite o primeiro numero do intervalo: ")
let num2 = leia.questionInt("Digite o segundo numero do intervalo: ")

if(num1 < num2){
    for(let i = num1; i <= num2; i++){

        if(i % 3 == 0 && i % 5 == 0){
            multiplo = i
            
            console.log(`\nNo intervalo entre ${num1} e ${num2}:\n${multiplo} é multiplo de ${num1} e ${num2}`)
        }
    }
}else console.log(`\nIntervalo inválido!`)