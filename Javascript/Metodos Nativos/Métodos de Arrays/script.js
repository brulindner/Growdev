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


