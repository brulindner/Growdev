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

