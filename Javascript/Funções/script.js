/*
//Crie uma função chamada calcularTriplo que recebe um número como parâmetro e imprime o triplo desse numero

function calcularTriplo(num){
    let total = num * 3

    console.log(total)
}

calcularTriplo(4)
*/


/*
//Escreva uma função chamada calcularAreaRetangulo que receba a largura e a altura de um retangulo e retorne a área. 

function calcularAreaRetangulo(altura, largura){

    const area = altura * largura
    return area
}


console.log(calcularAreaRetangulo(4, 11))
*/
/*
//ARROW FUNCTIONS

//    const somar = (a, b) => {
//   return a + b
//    }
//    console.log(somar(1,4))

//Se o meu Return tem somente uma linha, eu posso simplificar ainda mais. Omitir a palavra "return" e remover as chaves

//   const somar = (a, b) => a + b 
//   console.log(somar(4,5))

//Se eu tiver somente um parâmetro, eu posso também omitir os parenteses (Se não tiver nenhum parametro, ou se tiver mais, é necessário deixar os parenteses)

//    const multiplicar = numero => numero * 2
//    console.log(multiplicar(3))

function exibirBoasVindas(gerarMensagem){
    const mensagem = gerarMensagem('Bruna')
    console.log(mensagem)
}

exibirBoasVindas(nome => `Bem vindo(a), ${nome}`) //Usando função como argumento
*/

// EXERCICIO
//Crie uma Arrow function chamada calcularPrecoComDesconto que recebe:

// precoOriginal : preço inicial de um produto
// desconto: porcentagem de desconto
// A função deve retornar o preço final após aplicar o desconto, arredondando para duas casas decimais

const calcularPrecoComDesconto = (precoOriginal, desconto) => {
    const precoFinal = precoOriginal - (precoOriginal * (desconto/100))
    return  precoFinal.toFixed(2)
}

console.log(calcularPrecoComDesconto(90, 10))
console.log(calcularPrecoComDesconto(250, 15))