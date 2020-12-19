// Melhorias para o jogo
/*
  botar regras do jogo no inicio do site (para o site)
  botão de terminar (botao de formulario, carregar pagina novamente)

*/
document.addEventListener('DOMContentLoaded', () => {
    //opições de carta
    const cards = [
        {
            nome: 'cheeseburguer',
            imagem: 'images/cheeseburger.png'
        },
        {
            nome: 'cheeseburguer',
            imagem: 'images/cheeseburger.png'
        },
        {
            nome: 'fries',
            imagem: 'images/fries.png'
        },
        {
            nome: 'fries',
            imagem: 'images/fries.png'
        },
        {
            nome: 'hotdog',
            imagem: 'images/hotdog.png'
        },
        {
            nome: 'hotdog',
            imagem: 'images/hotdog.png'
        },
        {
            nome: 'ice-cream',
            imagem: 'images/ice-cream.png'
        },
        {
            nome: 'ice-cream',
            imagem: 'images/ice-cream.png'
        },
        {
            nome: 'milkshake',
            imagem: 'images/milkshake.png'
        },
        {
            nome: 'milkshake',
            imagem: 'images/milkshake.png'
        },
        {
            nome: 'pizza',
            imagem: 'images/pizza.png'
        },
        {
            nome: 'pizza',
            imagem: 'images/pizza.png'
        },
    ]

cards.sort(() => 0.5 - Math.random())
//criando a board
let section = document.querySelector('section')
let grid = document.querySelector('.grid')
let resDisplay = document.querySelector('#score') 
let cardsEscolhida = []
let cardsEscolhidaId = []
let cardsWon = []

function createBoard() {
    for (let i = 0; i < cards.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', girarCarta)
        grid.appendChild(card)
    }
}

// procurando por iguais
function checarPares (){
    var pares = document.querySelectorAll ('img')
    const optionOneId = cardsEscolhidaId[0]
    const optionTwoId = cardsEscolhidaId[1]
    if (cardsEscolhida[0] == cardsEscolhida[1]){
        //alert('Vc achou !!')
        pares[optionOneId].setAttribute('src','images/white.png')
        pares[optionTwoId].setAttribute('src','images/white.png')
        cardsWon.push(cardsEscolhida)
    }else{
        pares[optionOneId].setAttribute('src','images/blank.png')
        pares[optionTwoId].setAttribute('src','images/blank.png')
    }
    cardsEscolhida = []
    cardsEscolhidaId = []
    resDisplay.textContent = cardsWon.length
    if (cardsWon.length === cards.length/2 ){
        resDisplay.innerHTML = 'Parabéns,vc ganhou'
        var denovo = createElement('input')
        denovo.setAttribute('type','button')
        denovo.setAttribute('value','de novo?')
        section.appendChild(denovo)
    }
}


// Girar as cartas

function girarCarta (){
    var cardId = this.getAttribute('data-id')
    cardsEscolhida.push(cards[cardId].nome)
    cardsEscolhidaId.push(cardId)
    this.setAttribute('src', cards[cardId].imagem)
    if (cardsEscolhida.length === 2){
        setTimeout(checarPares, 500)
    }
}

createBoard()
checarPares ()

})