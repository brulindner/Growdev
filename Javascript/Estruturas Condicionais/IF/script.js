
/*
//Questão 1: Crie um programa que recebe um número e verifica se ele é par. Caso seja, exiba "O número é par"


let number = Number(prompt("Informe um número para verificar se é par ou ímpar"))

if(number %2 == 0){
    console.log(`O número ${number} é par!` )
} else{console.log(`O número  ${number} é ímpar!`)}
*/



/*
// Questão 2: crie um programa que recebe um número e verifica se ele é negativo. Caso seja, exiba "O número é negativo"

let num = Number(prompt("Informe um número para verificar se é negativo"))

if(num < 0){
    console.log(`O número ${num} é negativo`)
} else{
    console.log(`O número ${num} é positivo`)
}
*/


/*
//Questão 3: Crie um programa que recebe um valor e verifica se ele é maior que um limite de R$ 100,00. Se for, exiba "O valor excede o limite"

let valor = parseFloat(prompt("Informe o valor do depósito: "))

if(valor > 100){
    console.log("O valor excede o limite")
}
*/

/*
// Questão 1: Verificar se uma pessoa é elegível para um prêmio com base em idade e número de compras. Regras: A pessoa será elegível se for maior de 18 anos e tiver feito mais de 5 compras, ou se for membro VIP. 

const idade = 12
const numeroCompras = 6
const membroVip = false

if((idade >=18 && numeroCompras > 5) || membroVip){
    console.log('Você ganhou um prêmio!')
} else{
    console.log('Você não é elegível para o prêmio')
    }
*/



//Questão 2: Verifica se a pessoa tem idade suficiente para dirigir e se possui carteira de habilitação. Regras: Só poderá dirigir se tiver pelo menos 18 anos e tiver carteira de habilitação

const idade = 18
const temHabilitacao = true

if(idade >= 18 && temHabilitacao){
    console.log('Você pode dirigir!')
} else{
    console.log('Você não pode dirigir ainda')
}




