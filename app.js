

let numGriglie = 10
let numCelle = numGriglie * numGriglie

let grigliaElement = document.querySelector('.griglia')
let btnElement = document.getElementById('start')
let celleEl

console.log(numCelle, grigliaElement)

let bombe = []

punteggio = 0

btnElement.addEventListener('click', function() {
    //reset griglia
    grigliaElement.innerHTML = ' '

    punteggio.innerHTML = ' '

    bombe = generaBombe(16,1,numCelle)

    for (let i = 1; i <= numCelle; i++){
    numCorrente = i
    let cellaElement = `<div class="cella" style = " width: calc(100% / ${numGriglie});" >${numCorrente}</div>`

    grigliaElement.innerHTML += cellaElement

    }
    
    //generare un numeo random
    
    
    celleEl = document.querySelectorAll('.cella')

    for (let i = 0; i < celleEl.length; i++){
        const cell = celleEl[i]
        
        cell.addEventListener('click', onclick)
       
    }


    // for ( let i = 0; i < 16; i++){
    //     
        
    //     let numArray = bombe.push(numCasuali)
        
       
    //     // se lutente clicca su uno dei numeri delle bombe faccio comparire la bomba e resetto

    //     // console.log(numArray, bombe, num)

    // }


})


function onclick(click){
    let cella = this
    console.log(cella.innerHTML)

    let numCella = parseInt(cella.innerHTML)

    if (isBomb(numCella)) {
        console.log('hai perso')
        gameOver()
    } else {
        console.log('hai vinto')
        punteggio++
        // numCella.class.add('bg-green')


        // controllo se l'utente ha vinto cliccando tutte le bombe
        let vittoria = numCelle - bombe.length
        if (vittoria === punteggio){
            console.log('hai vinto')

        }
    }

    cella.removeEventListener('click', onclick)
}

function isBomb (numero) {
    let result = bombe.includes(numero)  // potevamo metterlo nell'if direttamente 

    return result
}

function generaBombe (numeroBomb,min,max){
    let arrayBombe=[]

    while (arrayBombe.length < numeroBomb) {
        let numCasuali = getRandomIntInclusive(min,max)

        if (arrayBombe.includes(numCasuali) === false){
            arrayBombe.push(numCasuali)
        }
        
    }


    return arrayBombe
}

function gameOver( ){
    console.log('hai perso')

    for(let i = 0; i < celleEl.length; i++) {
        let cella = celleEl[i]
        
        let numeroCella = parseInt( cella.innerHTML)

        if ( isBomb(numCelle)) {
            // cella.classList.add('bg-red')
        }

        cella.removeEventListener('click', onclick)
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }