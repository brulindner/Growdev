/*
let nome = '    Bruna Lais    ';
console.log(nome);
console.log(nome.trim())
console.log(nome.trimStart())
console.log(nome.trimEnd())

*/
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

//EXERCICIOS 

// 01 - Um cliente chamado "João" preencheu o formulário com o nome cheio de espaços em branco no início e no final. Agora, você precisa corrigir isso

const cliente = '   João    '
console.log(cliente.trim());

// 02 - Uma aluna chamada "Ana" preencheu um formulário, e o sistema precisa exibir o nome dela em letras maiusculas, já que será usado em um banner publicitário. Converta todo o nome para maiuscula

const aluno = "ana"
console.log(aluno.toUpperCase())

// 03 - Um escritor chamado "Paulo" está escrevendo um livro e, por engano, usou a palavra "antigo" onde deveria estar "novo". Substitua todas as ocorrências da palavra "antigo" por "novo" no texto abaixo: 

const livro = "O livro antigo foi revisado. A capa do livro antigo também foi trocada"

let livroNovo = livro.replaceAll("antigo", "novo")
console.log(livroNovo)

// 04 - Um professor está verificando as respostas de seus alunos e ele quer garantir que todas as respostas iniciem com a palavra "Resposta". Verifique se as respostas abaixo começam com a palavra "resposta"
const resposta1 = "Resposta: A capital do Brasil é Brasília"
const resposta2= "Minha resposta: A capital do Brasil é Brasília"

console.log(resposta1.startsWith("Resposta"))
console.log(resposta2.startsWith("Resposta"))

// 05 - Um usuário quer garantir que sua mensagem de saudação termine com "!" no final. Ele já escreveu a saudação "Olá, como vai", mas quer adicionar um ponto de exclamação no final usando um método

const saudacao = "Olá, como vai"
const saudacaoFinal = saudacao.concat("!")
console.log(saudacaoFinal)