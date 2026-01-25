let nome = '    Bruna Lais    ';
console.log(nome);
console.log(nome.trim())
console.log(nome.trimStart())
console.log(nome.trimEnd())


let titulo = 'Práticas Avançadas em JavaScript'
console.log(titulo.toUpperCase())
console.log(titulo.toLowerCase())

let tituloPython = titulo.replace("JavaScript" , "Python")
console.log(tituloPython)

let tituloSemLetraA = titulo.replaceAll("a", "X")
console.log(tituloSemLetraA)

//Indices
let index = titulo.indexOf("JavaScript")
console.log(index)

//Ele informa a posição onde se encontra a palavra informada. Se tivesse mais de uma palavra igual, consideraria somente a primeira. 

//Substrings
let subtitulo = titulo.substring(index)
console.log(subtitulo)
//Como eu sei da posição da palavra JavaScript, eu posso "pegar" ela usando o substring. Eu posso informar usando a variável, ou informando o número da posição dela. No substring é opcional informar o ponto final, se eu não colocar uma posição final, ele pegará a posição informada juntamente com todo o resto do texto depois dela. 

subtitulo = titulo.slice(index)
console.log(subtitulo)
//Aceita também números negativos para contar de trás para frente (ex: pegar as últimas 3 letras).

let nomeCliente = "Maria Joana da Silva Souza"

console.log(nomeCliente)
console.log(nomeCliente.startsWith("Maria"))
console.log(nomeCliente.endsWith("da Silva"))
// O startsWith retorna true ou false, dependendo se o nome realmente começa ou não com o arumento informado. Mesma coisa com o endsWith. Isso é importante para fazer uma lógica para saber por exemplo, quantos "da Silva" ou quantas "Maria" temos no sistema

console.log(nomeCliente.includes("da Silva"))
//Dessa forma, localiza se o nome da pessoa contém o sobrenome "da Silva". Usando esse, mesmo que o nome dela fosse Maria Joana da Silva Souza, ainda retornaria true pois contém "da Silva" no sobrenome dela

let clientesSilva = nomeCliente.includes("da Silva")
if(clientesSilva){
    console.log("Sim, o cliente é da família da Silva")
} else{
    console.log("Não é da família")
}

//Transformando uma string em uma lista:

let disciplinas = "frontend, backend, banco de dados, git"
let listaDisciplinas = disciplinas.split(", ") //aqui, estou informando que o que separa os meus itens da lista, são uma vírgula e um espaço

console.log(disciplinas)
console.log(listaDisciplinas)

disciplinas = disciplinas.concat(", ", "react", ", ", "python") 
console.log(disciplinas) 
//Forma de concatenar strings, juntar strings com outra

