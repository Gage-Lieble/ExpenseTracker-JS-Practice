
let result = document.getElementById('result')
let subBtn = document.getElementById('submitBtn')


subBtn.addEventListener('click', getForm)
function getForm(){
    let usersName = document.getElementById('name').value
    fetch(`https://api.agify.io/?name=${usersName}`)
    .then((response) => response.json())
    .then((data) => result.innerHTML= `I bet you are ${data.age} years old`)
    
}

    





