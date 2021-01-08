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
            imagem: './Imagem/Images_Game/cheeseburguer.png'
        },
        {
            nome: 'cheeseburguer',
            imagem: './Imagem/Images_Game/cheeseburguer.png'
        },
        {
            nome: 'fries',
            imagem: './Imagem/Images_Game/fries.png'
        },
        {
            nome: 'fries',
            imagem: './Imagem/Images_Game/fries.png'
        },
        {
            nome: 'hotdog',
            imagem: './Imagem/Images_Game/hotdog.png'
        },
        {
            nome: 'hotdog',
            imagem: './Imagem/Images_Game/hotdog.png'
        },
        {
            nome: 'ice-cream',
            imagem: './Imagem/Images_Game/ice-cream.png'
        },
        {
            nome: 'ice-cream',
            imagem: '/Imagem/Images_Game/ice-cream.png'
        },
        {
            nome: 'milkshake',
            imagem: './Imagem/Images_Game/milkshake.png'
        },
        {
            nome: 'milkshake',
            imagem: './Imagem/Images_Game/milkshake.png'
        },
        {
            nome: 'pizza',
            imagem: './Imagem/Images_Game/pizza.png'
        },
        {
            nome: 'pizza',
            imagem: './Imagem/Images_Game/pizza.png'
        },
    ]

cards.sort(() => 0.5 - Math.random())
//criando a board
let grid = document.querySelector('.grid')
let resDisplay = document.querySelector('#score') 
let cardsEscolhida = []
let cardsEscolhidaId = []
let cardsWon = []

function createBoard() {
    for (let i = 0; i < cards.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src','./Imagem/Images_Game/blank.png')
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
        pares[optionOneId].setAttribute('src','./Imagem/Images_Game/white.png')
        pares[optionTwoId].setAttribute('src','./Imagem/Images_Game/white.png')
        pares[optionOneId].removeEventListener('click', girarCarta)
        pares[optionTwoId].removeEventListener('click', girarCarta)
        cardsWon.push(cardsEscolhida)
    }else{
        pares[optionOneId].setAttribute('src','./Imagem/Images_Game/blank.png')
        pares[optionTwoId].setAttribute('src','./Imagem/Images_Game/blank.png')
    }
    cardsEscolhida = []
    cardsEscolhidaId = []
    resDisplay.textContent = cardsWon.length
    if (cardsWon.length === cards.length/2 ){
        resDisplay.innerHTML = 'Parabéns,vc ganhou !!'
        goAgain()
    }
}


// Girar as cartas

function girarCarta (){
    var cardId = this.getAttribute('data-id')
    cardsEscolhida.push(cards[cardId].nome)
    cardsEscolhidaId.push(cardId)
    this.setAttribute('src', cards[cardId].imagem)
    if (cardsEscolhida.length === 2){
        setTimeout(checarPares, 300)
    }
}

createBoard()

})

function goAgain(){
    let denovo = document.createElement('button');
    let sair = document.createElement('button');
    let sairA = document.createElement("a");
  
    denovo.setAttribute('id', 'again');
    denovo.setAttribute('class','play');
    denovo.innerHTML = "De novo";
  
    sair.setAttribute('class','play');
    sair.innerHTML = "Sair"
  
    sairA.setAttribute('href','botaoiniciar/index.html');
  
    document.querySelector("form").appendChild(denovo);
    document.querySelector("#button").appendChild(sairA);
    sairA.appendChild(sair);
  
  }
