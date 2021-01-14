// Melhorias para o jogo
/*
  botar regras do jogo no inicio do site (para o site)
  trocar nome do jogador (tirar numero e colocar o nome dele), quando ganhar, comemorar com o nome do jogador
  botão de terminar (botao de formulario, carregar pagina novamente)

*/
let sec = document.querySelector('section')
let go = document.getElementById('comecar')
go.addEventListener ("click", comecar)


function comecar(){
    sec.removeChild(go)
    let square = document.querySelectorAll(".square")
    const mole = document.querySelectorAll('.mole')
    const Timeleft = document.querySelector('#timeleft')
    let score = document.querySelector('#score')

    let result = 0
    let currenTime = Timeleft.textContent

    function quadradoQualquer() {
        square.forEach(className => {
            className.classList.remove('mole')
        })
    let posiçaoQualquer = square[Math.floor(Math.random() *16)]
    posiçaoQualquer.classList.add('mole')   

        // atribuir a id da posiçaoQualquer para baterNoMole para usarmos depois
        bateNoMole = posiçaoQualquer.id
    }

    square.forEach(id => {
        id.addEventListener ( 'mousedown', () => {
            if (id.id === bateNoMole){
                result ++
                score.textContent = result
            }
        })
    })


    function moverMole(){
        if (currenTime != "0"){
            let timeId = null
            timeId = setInterval(quadradoQualquer,700)
        }
    }

    moverMole()

    function contagem(){
        currenTime --
        Timeleft.textContent = currenTime
        if (currenTime === 0) {
            clearInterval (timeId)
            alert (`O tempo acabou, vc fez ${result} clicadas certas`)
            goAgain()
        }
        
    }

    let timeId = setInterval(contagem, 800)
}

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