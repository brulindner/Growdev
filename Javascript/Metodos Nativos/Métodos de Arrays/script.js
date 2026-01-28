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

//let frutas = ['maça', 'banana', 'laranja']
//console.table(frutas)

//frutas.pop()
//console.table(frutas)

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

let produto10ItensEstoque = produtos.find(produtos => produtos.estoque >=10)
 if(!produto10ItensEstoque){
    console.log("Produto não encontrado")
} else{
    console.log(produto10ItensEstoque)
}



//EVERY E SOME

//EXERCICIOS

//1- Um usuário tem uma lista de pessoas com suas idades e deseja verificar se existe pelo menos uma pessoa maior de 18 anos

let pessoas = [
    {nome: "Lucas", idade: 16},
    {nome: "Maria", idade: 22},
    {nome: "Carlos", idade: 15},
    {nome: "Fernanda", idade: 30},
];

let pessoaMaiorDeIdade = pessoas.some(pessoas => pessoas.idade > 18)
console.log(pessoaMaiorDeIdade)

//2- Um estudante tem uma lista de taredas de estudo e deseja verificar se todas as tarefas foram concluidas 

let tarefasEstudo = [
    {descricao: "Estudar Matemática", concluido: true},
    {descricao: "Revisar Física", concluido: true},
    {descricao: "Fazer exercícios de química", concluido: true},
    {descricao: "Ler capítulo de biologia", concluido: false},
];

let tarefasConcluidas = tarefasEstudo.every(tarefasEstudo => tarefasEstudo.concluido)
console.log(tarefasConcluidas)




//MAP

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

let listaAtualizada = recados.map(item => {
    return {
        id: item.id + 100,
        descricao: item.descricao,
        urgente: item.urgente
    }
});

console.log(recados)
console.log(listaAtualizada)



// FOREACH

recados.forEach(item=>{
    item.id = item.id + 500;
    console.log(item)
})

console.table(recados)


//EXERCICIOS

//Em um supermercado, o gerente decidiu dar um desconto de 10% em alguns produtos. Sua tarefa é calcular o preço final desses produtos com o desconto aplicado e exibir uma nova lista de preços
let produtos = [
    {nome: "Arroz", preco: 20},
    {nome: "Feijão", preco: 10},
    {nome: "Macarrão", preco: 8},
    {nome: "Açúcar", preco: 5},
]

let produtosComDesconto = produtos.map(item =>{
    return{
        nome: item.nome, preco: item.preco - (item.preco * 0.1)
    }
})

console.log(produtosComDesconto)


// Você trabalha em uma biblioteca e precisa criar uma lista para saber quantas paginas ainda faltam para terminar de ler cada livro. Para isso, você tem uma lista de livros com o total de páginas que já foram lidas
let livros = [
    {titulo: "O Senhor dos Anéis", totalPaginas: 1000, paginasLidas: 320},
    {titulo: "1984", totalPaginas: 328, paginasLidas: 100},
    {titulo: "O Código da Vinci", totalPaginas: 96, paginasLidas: 50},
]

let livrosPaginasRestantes = livros.map(item => {
    return {
        titulo: item.titulo, paginasRestantes: item.totalPaginas - item.paginasLidas
    }
})

console.log(livrosPaginasRestantes)

// Você está organizando uma festa e tem uma lista de convidados. Agora quer enviar uma mensagem de confirmação para cada um deles. Mostre no console uma mensagem para cada convidado usando forEach
let convidados = ["João", "Maria", "Carlos", "Fernanda"];

convidados.forEach(item=>{
    console.log(`Olá, ${item}! Você está confirmado`)
})
    */

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

// SLICE 
//Não altera a lista original, apenas mostra uma fatia dela

let recadosRestantes = recados.slice(1,3) //O primeiro indica o array que começa e o ultimo parâmetro é pro array que termina... No exemplo, o 3 é referente ao penúltimo array da minha lista, pois ele considera um número anterior. E se não informar porto de término, ele percorre a lista toda. 
console.log(recadosRestantes)


//EXERCICIOS

//1- Vamos imaginar que você tem uma lista de frutas e deseja obter apenas as primeiras três frutas dessa lista:
let frutas = ["Maça","Banana","Laranja", "Uva", "abacaxi"]

let tresPrimeiras = frutas.slice(0, 3)
console.log(tresPrimeiras)

//2-Você tem uma lista de tarefas e deseja obter todas as tarefas, exceto as duas primeiras, mas sem alterar a lista original
let tarefas = ["Estudar para a prova", "Revisar os exercícios", "Assistir as aulas", "Ler um livro"]

let tarefasRestantes = tarefas.slice(2)
console.log(tarefasRestantes
)

//3- Refaça o exercicio 2, mas dessa vez exluindo os dois primeiros itens da lista original

tarefas.splice(0,2)
console.table(tarefas)

//JOIN, INCLUDES E REVERSE

//1- Você tem uma lista de ingredientes para uma receita e deseja criar uma unica string que contenha todos os ingredientes separados por vírgulas
let ingredientes = ["Farinha", "Açúcar", "Ovos", "Leite", "Manteiga"]

let receita = ingredientes.join(", ")
console.log(receita)

//2 - Você está organizando um campeonato de jogos e tem uma lista de jogadores inscritos. Você quer verificar se um jogador específico se inscreveu no campeonato
let jogadoresInscritos = ["Lucas", "Mariana", "Felipe", "Tatiane", "Roberto"]
let jogadoresParaVerificar = "Felipe"

let jogadorInscrito = jogadoresInscritos.includes(jogadoresParaVerificar)

console.log(jogadorInscrito)

//3 - Você é o organizador de um campeonato de futebol. Para garantir que tudo saia conforme o planejado, você criou uma lista de tarefas. Mas essa lista está em ordem invertida e você precisa corrigir

let tarefasDoCampeonato = [
    "Divulgar o evento",
    "Definir equipes",
    "Comprar os prêmios",
    "Escolher o local do jogo",
    "Criar as regras do torneio"
]

tarefasDoCampeonato.reverse()
console.log(tarefasDoCampeonato)

//SORT
//Ele ordena de forma crescente por padrão. Mas vc pode passar uma função, para fazer ele ordenar de formas diferentes. 

let clientes = ["João", "Maria", "Cleide", "Pedro"]

//clientes.sort();
//console.log(clientes) // Dessa forma, ordenou de forma crescente. Ordem alfabética

clientes.sort((a,b) =>{
    // retornar -1 (quando "a" deve ir antes de "b"), 0 (retornar 0 quando não faz diferença a ordem), 1 (retornar 1 quando "b" deve ir antes de "a")

    if (a < b ){
        return -1;
    }

    if(a === b){
        return 0;
    }

    if(a > b){
        return 1;
    }
// Dessa forma aqui, acabamos de fazer a mesma coisa, fica na ordem crescente. Se quiser em ordem decrescente, basta inverter 

})

console.log(clientes)

recados.sort((a,b) =>{
    if(a.id > b.id){
        return-1;
    }
    return 1;
})
console.log(recados)

//EXERCICIOS 

// Você está organizando uma lista de nomes e quer se certificar de que todos os convidados estão organizados em ordem alfabética para facilitar a hora de fazer as ligações 
let nomes = ["Carlos", "Ana", "Mariana", "Felipe", "João"]

nomes.sort();
console.log(nomes)

//Você está organizando uma equipe para um torneio de esportes e precisa classificar os participantes por idade. Para isso, você fez uma lista com as idades deles e quer organizá-los do mais jovem para o mais velho
let clientesLista = [
    {nome: "Pedro", idade: 20},
    {nome: "Joana", idade: 25},
    {nome: "Maria", idade: 12},
    {nome: "Cleide", idade: 65},
]

clientesLista.sort((a,b) =>{
    if(a.idade < b.idade) {
        return -1;
    }
    return 1
});

console.log(clientesLista)