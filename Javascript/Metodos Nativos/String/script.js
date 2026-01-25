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