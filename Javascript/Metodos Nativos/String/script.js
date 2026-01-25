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