

let numGriglie = 10
let numCelle = numGriglie * numGriglie

let grigliaElement = document.querySelector('.griglia')
let btnElement = document.getElementById('start')


console.log(numCelle, grigliaElement)

btnElement.addEventListener('click', function ( ) {
    //reset griglia
    grigliaElement.innerHTML = ' '

    for (let i = 1; i <= numCelle; i++){
    numCorrente = i
    let cellaElement = `<div class="cella" style = " width: calc(100% / ${numGriglie});" >${numCorrente}</div>`

    grigliaElement.innerHTML += cellaElement

    }
    
    //generare un numeo random
    let numCasuali
    for ( let i = 0; i < 16; i++){
        let numCasuali = Math.floor(Math.random() * (numCelle - 1 + 1) + 1)
        console.log(numCasuali)
    }

    

    let celleEl = document.querySelectorAll('.cella')

    for (let i = 0; i < celleEl.length; i++) {
        const cell = celleEl[i]
        
        cell.addEventListener('click', function () {
            console.log(cell)
            cell.classList.add('color')
            
        })

    }



})


