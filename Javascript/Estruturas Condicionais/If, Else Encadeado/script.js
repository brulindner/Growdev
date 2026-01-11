//Questão 1: Crie um programa que calcule o desconto de um produto com base no valor total:
// Se o valor for menor que R$ 100,00, sem desconto.
// Se o valor estiver entre R$ 100,00 e R$ 500,00, 10% de desconto
// Se for maior que R$500, 20% de desconto

let valorTotal = Number(prompt("Qual o valor total do produto?"))
if(valorTotal < 100){
    console.log(`Você não ganhou desconto, valor total: ${valorTotal}`)
} else if(valorTotal>=100 && valorTotal<=500){
    valorTotal = valorTotal * 0.90
    console.log(`Desconto de 10%. Valor total: ${valorTotal}`)
} else if(valorTotal > 500){
    valorTotal = valorTotal * 0.80
    console.log(`Desconto de 20%. Valor total: ${valorTotal}`)
}
