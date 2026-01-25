// Operações
let numero = 42;
console.log(Math.pow(numero, 2)) // Potência, 42 elevado a 2
console.log(Math.sqrt(numero)) // Raiz quadrada
console.log(Math.abs(numero)) // Absoluto (se fosse um número negativo, ele mostraria sem o sinal -)

// Parsing
let decimal = parseFloat("10.5")
console.log(decimal)
console.log(typeof decimal)


let inteiro = parseInt("10.8")
console.log(inteiro)
console.log(typeof inteiro)


let numeroReal = Number("9.89adsd")
console.log(numeroReal) 
console.log(typeof numeroReal)

//O Number é muito parecido com o parseFloat. Ele também mostra números que não estejam inteiros. Mas o parseFloat e o parseInt, mostram os números mesmo se tiver alguma letra depois. E no Number, se tiver alguma letra depois do número, ele retorna NaN

// Verificação
console.log(Number.isInteger(inteiro)) //Verifica se o número é inteiro e retorna um booleano

console.log(Number.isNaN(numeroReal)) // Verifica se não é um número

// Arredondamento
let taxaDeJuros = 1.8912121212;
console.log(taxaDeJuros)
console.log(Math.floor(taxaDeJuros)) //para baixo
console.log(Math.ceil(taxaDeJuros)) // para cima
console.log(Math.round(taxaDeJuros)) //arredonda para o número mais próximo

//Conversão
console.log(taxaDeJuros.toString());
console.log(taxaDeJuros.toFixed(2)) //Mostra 2 números após a vírgula
console.log(taxaDeJuros.toPrecision(3)) //Nesse exemplo, ele vai mostrar 3 primeiros digitos no console. Independente se estão após ou antes da vírgula 

// Max min
let nota1 = 9;
let nota2 = 7.5;

let maiorNota = Math.max(nota1, nota2) //Retorna a maior nota
console.log(maiorNota)

let menorNota = (Math.min(nota1, nota2)) //retorna a menor nota
console.log(menorNota)

//Random
let aleatorio = Math.random(); //Gera um número aleatório entre 0 e 1
console.log(aleatorio)

let aleatorioEntre0e100 = (aleatorio * 1000) % 100; //Como eu quero um número aleatório entre 0 e 100 e o Random só gera entre 0 e 1, primeiro eu multiplico (por mil nesse caso, para obter mais possibilidades) e depois faço o resto da divisão por 100. Pois dessa forma, não é possível que gere um número maior que 100
console.log(aleatorioEntre0e100)