

let startScore = 5

let ans11 = document.getElementById('1-1')
let ans12 = document.getElementById('1-2')
let ans13 = document.getElementById('1-3')

let ans21 = document.getElementById('2-1')
let ans22 = document.getElementById('2-2')
let ans23 = document.getElementById('2-3')

let ans31 = document.getElementById('3-1')
let ans32 = document.getElementById('3-2')
let ans33 = document.getElementById('3-3')

let ans41 = document.getElementById('4-1')
let ans42 = document.getElementById('4-2')
let ans43 = document.getElementById('4-3')

let ans51 = document.getElementById('5-1')
let ans52 = document.getElementById('5-2')
let ans53 = document.getElementById('5-3')

let scoreCount = document.getElementById('score')

// 1
ans13.addEventListener('click', function(){
    ans11.innerHTML = '<p>Correct!</p>'
    ans11.style = 'background-color:rgb(62, 213, 133); color:white;'
    ans12.style.display = 'none'
    ans13.style.display = 'none'


    scoreCount.innerHTML = `5/${startScore}`
})

ans12.addEventListener('click', function(){
    ans11.innerHTML = '<p>Wrong!</p>'
    ans11.style = 'background-color: rgb(240, 124, 70); color:white;'
    ans12.style.display = 'none'
    ans13.style.display = 'none'
    startScore -= 1

    scoreCount.innerHTML = `5/${startScore}`
})

ans11.addEventListener('click', function(){
    ans11.innerHTML = '<p>Wrong!</p>'
    ans11.style = 'background-color:rgb(240, 124, 70); color:white;'
    ans12.style.display = 'none'
    ans13.style.display = 'none'
    startScore -= 1

    scoreCount.innerHTML = `5/${startScore}`
})



// 2
ans22.addEventListener('click', function(){
    ans21.innerHTML = '<p>Correct!</p>'
    ans21.style = 'background-color:rgb(62, 213, 133); color:white;'
    ans22.style.display = 'none'
    ans23.style.display = 'none'


    scoreCount.innerHTML = `5/${startScore}`
})

ans23.addEventListener('click', function(){
    ans21.innerHTML = '<p>Wrong!</p>'
    ans21.style = 'background-color:rgb(240, 124, 70); color:white;'
    ans22.style.display = 'none'
    ans23.style.display = 'none'
    startScore -= 1

    scoreCount.innerHTML = `5/${startScore}`
})

ans21.addEventListener('click', function(){
    ans21.innerHTML = '<p>Wrong!</p>'
    ans21.style = 'background-color:rgb(240, 124, 70); color:white;'
    ans22.style.display = 'none'
    ans23.style.display = 'none'
    startScore -= 1

    scoreCount.innerHTML = `5/${startScore}`
})



// 3
ans33.addEventListener('click', function(){
    ans31.innerHTML = '<p>Correct!</p>'
    ans31.style = 'background-color:rgb(62, 213, 133); color:white;'
    ans32.style.display = 'none'
    ans33.style.display = 'none'
    scoreCount.innerHTML = `5/${startScore}`

})

ans32.addEventListener('click', function(){
    ans31.innerHTML = '<p>Wrong!</p>'
    ans31.style = 'background-color:rgb(240, 124, 70); color:white;'
    ans32.style.display = 'none'
    ans33.style.display = 'none'
    startScore -= 1

    scoreCount.innerHTML = `5/${startScore}`
})

ans31.addEventListener('click', function(){
    ans31.innerHTML = '<p>Wrong!</p>'
    ans31.style = 'background-color:rgb(240, 124, 70); color:white;'
    ans32.style.display = 'none'
    ans33.style.display = 'none'
    startScore -= 1

    scoreCount.innerHTML = `5/${startScore}`
})




// 4
ans41.addEventListener('click', function(){
    ans41.innerHTML = '<p>Correct!</p>'
    ans41.style = 'background-color:rgb(62, 213, 133); color:white;'
    ans42.style.display = 'none'
    ans43.style.display = 'none'
    scoreCount.innerHTML = `5/${startScore}`

})

ans42.addEventListener('click', function(){
    ans41.innerHTML = '<p>Wrong!</p>'
    ans41.style = 'background-color:rgb(240, 124, 70); color:white;'
    ans42.style.display = 'none'
    ans43.style.display = 'none'
    startScore -= 1

    scoreCount.innerHTML = `5/${startScore}`
})

ans43.addEventListener('click', function(){
    ans41.innerHTML = '<p>Wrong!</p>'
    ans41.style = 'background-color:rgb(240, 124, 70); color:white;'
    ans42.style.display = 'none'
    ans43.style.display = 'none'
    startScore -= 1

    scoreCount.innerHTML = `5/${startScore}`
})



// 5
ans53.addEventListener('click', function(){
    ans51.innerHTML = '<p>Correct!</p>'
    ans51.style = 'background-color:rgb(62, 213, 133); color:white;'
    ans52.style.display = 'none'
    ans53.style.display = 'none'
    scoreCount.innerHTML = `5/${startScore}`

})

ans52.addEventListener('click', function(){
    ans51.innerHTML = '<p>Wrong!</p>'
    ans51.style = 'background-color:rgb(240, 124, 70); color:white;'
    ans52.style.display = 'none'
    ans53.style.display = 'none'
    startScore -= 1

    scoreCount.innerHTML = `5/${startScore}`
})

ans51.addEventListener('click', function(){
    ans51.innerHTML = '<p>Wrong!</p>'
    ans51.style = 'background-color:rgb(240, 124, 70); color:white;'
    ans52.style.display = 'none'
    ans53.style.display = 'none'
    startScore -= 1

    scoreCount.innerHTML = `5/${startScore}`
})

