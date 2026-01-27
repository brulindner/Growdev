let listaCompras = ["arroz", "feijão", "pão"]
console.table(listaCompras);

//Adicionar itens na lista

listaCompras.push("água", "refrigerante") //Push adiciona no final da lista
console.table(listaCompras)

listaCompras.unshift("queijo") //Unshift adiciona no início da lista
console.table(listaCompras)

//Remover itens da lista

listaCompras.pop(); //Remove o ultimo item da lista
console.table(listaCompras)

//Se eu desejar mostrar qual elemento foi removido, posso criar uma variável dessa forma:
// let elementoRemovido = listaCompras.pop();
// E posso avisar dessa forma o usuário: 
// alert(`O elemento ${elementoRemovido} foi excluído!`)

listaCompras.shift(); //remove o primeiro item da lista
console.table(listaCompras)

//EXERCÍCIOS

//01 - Um usuário criou uma lista de compras com alguns itens. Agora ele deseja adicionar novos itens, tanto no inicio quanto no final da lista. Adicione pelo menos 1 item no inicio e 1 item no final da lista

let listaDeCompras = ['arroz', 'feijão', 'carne']
console.table(listaDeCompras)

listaDeCompras.unshift('tomate')
console.table(listaDeCompras)

listaDeCompras.push('cebola')
console.table(listaDeCompras)

//02 - Um cliente tem uma lista de frutas e quer remover a última fruta da lista

let frutas = ['maça', 'banana', 'laranja']
console.table(frutas)

frutas.pop()
console.table(frutas)

//03 - Um usuário tem uma estante de livros com os seguintes titulos: "Game of Thrones", "Harry Potter" e o "Código da Vinci". Ele deseja remover o primeiro livro da estante 

let estanteDeLivros = ["Game Of Thrones", "Harry Potter", "O Código da Vinci"]
console.table(estanteDeLivros)

estanteDeLivros.shift();
console.table(estanteDeLivros)

//FILTER
/*
let recados = [
    {
        id: 312,
        descricao: "Estudar Javascript",
        urgente: true
    },
    {
        id: 412,
        descricao: "Fazer os exercícios",
        urgente: true
    },
    {
        id: 117,
        descricao: "Entender listas",
        urgente: false
    },
    {
        id: 55,
        descricao: "Comparar Javascript com python",
        urgente: false
    },
];

console.table(recados);
*/

/*
let recadosUrgentes = recados.filter((recado) => {
    return recado.urgente;
})

let recadosUrgentes = recados.filter((recado) => recado.urgente); //Quando cabe em uma linha, é mais usado dessa forma no dia a dia. Não é necessário o return, nem as chaves. 

console.table(recadosUrgentes)

let recadosJavascript = recados.filter((recado) => recado.descricao.includes("Javascript"));

console.table(recadosJavascript)
*/

//EXERCICIOS


// 1 - Um usuário tem uma lista de números e deseja filtrar apenas os números pares
/*
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosPares = numeros.filter((numero)=> numero%2 ===0)
console.log(numerosPares)
    

// 2 - Uma cliente tem uma lista de nomes e deseja filtrar apenas os nomes que iniciam com a palavra "João"
let nomes = ["João", "Maria", "Daphne", "Pedro", "João Pedro", "Ana", "José"];

let nomeJoao = nomes.filter((nomes) => nomes.startsWith("João"))

console.table(nomeJoao)

//3 - Um usuário tem uma lista de objetos onde cada objeto possui várias propriedades, incluindo uma informação sobre o nível de urgencia (de 1 a 5), sendo 1 pouco urgente e 5 muito urgente. O objetivo é filtrar apenas os objetos onde o campo urgente é maior ou igual a 3

let itens = [
    {nome: "Item 1", categoria: "Eletrônicos", urgente:5},
    {nome: "Item 2", categoria: "Livros", urgente:3},
    {nome: "Item 3", categoria: "Alimentos", urgente:4},
    {nome: "Item 4", categoria: "Roupas", urgente:2},
    {nome: "Item 5", categoria: "Ferramentas", urgente:5},
]

let objetoUrgente = itens.filter((itens => itens.urgente>=3))

console.table(objetoUrgente)

//4 - Um cliente tem uma lista de cidades com seus respectivos estados e deseja filtrar apenas as cidades que estão localizadas no estado do Rio Grande do Sul

let cidades = [
    {nome: "Porto Alegre", estado: "RS"},
    {nome: "Pelotas", estado: "RS"},
    {nome: "Caxias do Sul", estado: "RS"},
    {nome: "Curitiba", estado: "PR"},
    {nome: "Florianópolis", estado: "SC"},
]

let cidadesRs = cidades.filter((cidades)=> cidades.estado=="RS")

console.table(cidadesRs)
  */

//FIND

let recados = [
    {
        id: 312,
        descricao: "Estudar Javascript",
        urgente: true
    },
    {
        id: 412,
        descricao: "Fazer os exercícios",
        urgente: true
    },
    {
        id: 117,
        descricao: "Entender listas",
        urgente: false
    },
    {
        id: 55,
        descricao: "Comparar Javascript com python",
        urgente: false
    },
];

let recadoListas = recados.find(item => item.id === 117)
console.log(recadoListas)
 
// O Find retorna no máximo um registro. Se houver mais de uma ocorrência, ele retorna somente a primeira da lista. Normalmente ele é usado para Id. 

let recadoInexistente = recados.find(item => item.id == 999)
console.log(recadoInexistente)
/*
if(!recadoInexistente){
    alert("Erro, o recado não existe!")
}
*/


// FIND INDEX

let posicaoRecadoListas = recados.findIndex(item => item.id ===117);
console.log(posicaoRecadoListas);

let posicaoRecadoInexistente = recados.findIndex(item => item.id===999)
console.log(posicaoRecadoInexistente)

// O find index retorna a posição do item. Quando o item não existe, ele retorna -1. Saber a posição é muito importante para conseguir fazer manipulações em uma lista. 

// EXERCICIOS

//1 - Encontre o primeiro número par da lista abaixo e exiba no console a posição desse número na lista
const numeros = [1, 3, 7, 8, 9, 12, 20, 21]

let numeroPar = numeros.findIndex(numeros => numeros % 2 === 0)
console.log(numeroPar)

// 2 - Considere a lista de produtos abaixo e resolva as questões para determinados produtos. Se houver produto com a condição da questão, mostre o produto no console. Caso contrário, exiba "Produto não encontrado"

const produtos = [
    {nome: "Caneta", preco: 5, estoque: 6},
    {nome: "Caderno", preco: 20, estoque: 20},
    {nome: "Mochila", preco: 150, estoque: 2},
    {nome: "Borracha", preco: 3, estoque: 1},
    {nome: "Lápis", preco: 2, estoque: 12},
];

// Encontre o primeiro produto caro (acima de R$ 100)

let produtoCaro = produtos.find(produtos => produtos.preco > 100)
console.log(produtoCaro)

// Encontre o primeiro produto que está sem estoque

let produtoSemEstoque = produtos.find(produtos => produtos.estoque==0)
console.log(produtoSemEstoque)
    if(!produtoSemEstoque){
    console.log("Produto não encontrado")
} else{
    console.log(produtoSemEstoque)
}

// Encontre o primeiro produto que possue ao menos 10 itens no estoque

let produtoComEstoque = produtos.find(produtos => produtos.estoque >=10)
console.log(produtoComEstoque)


