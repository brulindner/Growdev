//Questão 01: A partir de uma idade da pessoa usuária, verifique se ela pode votar (idade maior ou igual a 16) e se ele é obrigada a votar (idade entre 18 e 70)

const idade = 20

const podeVotar = idade >= 16
const votoObrigatorio = idade >=18 && idade <=70

console.log(`Pode votar: ${podeVotar}`)
console.log(`Voto obrigatório: ${votoObrigatorio}`)

//Questão 02: Você está programando um sistema de e-commerce e precisa verificar se a pessoa cliente tem direito a um desconto. As regras são:
// - A pessoa cliente só tem direito ao desconto se for VIP ou se o valor de compra for maior ou igual a 100 reais

const clienteVip = false
const valorCompra = 120

const temDesconto = clienteVip || valorCompra >= 100

console.log(temDesconto)
