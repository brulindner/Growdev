// WHILE

/*
const numeroAleatorio = Math.floor(Math.random()*10)+1
let tentativas = 0
let acertou = false

while(!acertou){
    const palpite = parseInt(prompt('Digite um número entre 1 e 10'))

    tentativas++

    if(palpite == numeroAleatorio){
        console.log(`Parabéns! Você acertou em ${tentativas} tentativas`)
        acertou = true
    } else{
        alert("Tente novamente")
    }

}
    */

/*
//Crie um programa que faça contagem regressiva de um número até 0. O programa deve imprimir cada número da contagem no console. 

numero = parseInt(prompt('Digite um número: '))

if(numero > 0){
    while(numero >= 0){
        console.log(numero)
        numero --
    
        if(numero == 0){
            console.log('Contagem finalizada')
        }
    } else{
        console.log('Por favor, digite um número inteiro positivo')
    }
}
    */

/*
// DO WHILE

//Crie um programa que solicite a pessoa usuaria para inserir numeros positivos e continue somando esses números até que um número negativo seja digitado. Ao final, exiba o total da soma.

let soma  = 0
let numero

do{
     numero = parseInt(prompt("Digite um número inteiro positivo para somar (ou negativo para finalizar):  "))

    if(numero > 0){
        soma += numero
    }

} while(numero >= 0)

    console.log(soma)
    */

    /*
// For

//Crie um programa que exiba a tabuada de multiplicação de um número fornecido pela pessoa  usuária

let numero = parseInt(prompt('Digite um número: '))

for(let i = 1; i<=10; i++){
    console.log(`${numero} x ${i} = ${numero * i}`)
}
*/

/*
// Questão 01: Imprima os números de 1 a 10, cada um em uma linha

for(let i = 1; i<=10; i++){
    console.log(i)
}
    */

// Questão 2: Peça ao usuário para inserir palavras. Continue pedido até que o usuário digite a palavra "sair". Exiba cada palavra digitada

do { 
    let palavra = prompt('Digite qualquer palavra ou sair para encerrar')

   
} while (palavra !== 'sair' ){
    console.log('Você digitou a palavra', palavra)
    palavra = prompt('Digite uma palavra (ou sair para encerrar)')
}