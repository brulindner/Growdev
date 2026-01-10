//Crie um array chamado Produtos, onde cada objeto representan um produto com as propriedades nome, preço e categoria. A tarefa é acessar e exibir as informações do terceiro produto da lista.

const produtos = [
 
    {
        nome: 'Tablet',
        preco: 2500,
        categoria: 'Eletrônicos'
    },

    {
        nome: 'Celular',
        preco: 2000,
        categoria: 'Eletrônicos'
    },

    {
        nome: 'Notebook',
        preco: 3000,
        categoria: 'Informática'
    }
]

console.log('Nome do produto:' , produtos[2].nome)
console.log('Nome do produto:' , produtos[2].preco)
console.log('Nome do produto:' , produtos[2].categoria)
