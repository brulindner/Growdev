/*
//Crie uma estrutura switch que recebe uma variável nota (A, B, C, D ou F) e exiba uma mensagem correspondente a avaliação:

//A: "Excelente!"
//B: "Muito Bom!"
//C: "Bom"
//D: "Precisa Melhorar"
//F: "Reprovado"
//Para qualquer outra nota, exiba: "Nota inválida"

const nota = prompt("Digite a nota: (A, B, C, D ou F").toUpperCase();
let mensagem

switch (nota){
    case 'A' : mensagem = "Excelente!"
    break;

    case 'B': mensagem = "Muito bom!!"
    break;

    case 'C': mensagem = "Bom"
    break;

    case 'D': mensagem = "Precisa melhorar!"
    break;

    case 'F': mensagem = "Reprovado!"
    break;

    default: mensagem = "Nota inválida!"
    break
}

console.log(mensagem) 
*/

//IF ELSE ou Switch Case? 

//Questão 01: Crie um programa que recebe a hora do dia e exibe se é "manhã", "tarde", "noite" ou "hora inválida". Considere:

// - Manha 05h as 11h
// - Tarde: 12h as 17h
// - Noite: 18h as 22h

/*
const hora = 13

if(hora >=5 && hora <=11){
    console.log("Manhã")
}
else if(hora >=12 && hora <=17){
 console.log("Tarde")
}
else if(hora >=18 && hora<=22){
    console.log("Noite")
}
else{
    console.log("Hora inválida")
}
*/

//Questão 02:

const cor = 'vermelho'

switch(cor){
    case 'vermelho':
        console.log("Você escolheu a cor da paixão")
        break

    case 'azul':
        console.log("Você escolheu a cor da tranquilidade")
        break

    case 'verde':
        console.log("Você escolheu a cor da natureza")
        break

    default:
        console.log("Cor desconhecida")
}
