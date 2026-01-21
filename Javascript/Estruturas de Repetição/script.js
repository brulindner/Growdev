// WHILE

const numeroAleatorio = Math.floor(Math.random()*10)+1
let tentativas = 0
let acertou = false

while(!acertou){
    const palpite = parseInt(prompt('Digite um número entre 1 e 10'))

    tentativas++

    if(palpite == numeroAleatorio){
        console.log(`Parabéns! Você acertou em ${tentativas} tentativas`)
        acertou = true
    } else{
        alert("Tente novamente")
    }

}