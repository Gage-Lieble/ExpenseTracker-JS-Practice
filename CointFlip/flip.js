let headsBtn = document.getElementById('heads')
let tailsBtn = document.getElementById('tails')
let hAndT = ['heads', 'tails']

headsBtn.addEventListener('click', function(){
    let userChoice = 'heads'
    console.log(`You chose ${userChoice}`)
    if (userChoice != randomGen(hAndT)){
        console.log('You lose')
    }
    else {
        console.log('You won!')
    }
    
})
tailsBtn.addEventListener('click', function(){
    let userChoice = 'tails'
    console.log(`You chose ${userChoice}`)
    if (userChoice != randomGen(hAndT)){
        console.log('You lose')
    }
    else {
        console.log('You won!')
    }
    
})


function randomGen(hAndT){
    let index = Math.floor(Math.random() * hAndT.length)
    console.log(`The coin landed on ${hAndT[index]}`)
    return hAndT[index]
}

