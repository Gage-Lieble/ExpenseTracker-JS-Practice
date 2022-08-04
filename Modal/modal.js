let toggleBtn = document.getElementById('toggle')
let modalCont = document.getElementById('modal-cont')
let exitBtn = document.getElementById('exit')

toggleBtn.addEventListener('click', function(){
        modalCont.style.visibility = 'visible'
})

exitBtn.addEventListener('click', function(){
    modalCont.style.visibility = 'hidden'
})