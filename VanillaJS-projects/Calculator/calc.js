

let subBtn = document.getElementById('submit')
let resultWrap = document.getElementById('result')

subBtn.addEventListener('click', function(){
    let numOne = document.getElementById('num-1').value
    let oper = document.getElementById('math').value
    let numTwo = document.getElementById('num-2').value

    if (oper == '+'){
        let result = parseInt(numOne) + parseInt(numTwo)
        resultWrap.innerHTML = result
    }
    else if(oper == '-'){
        let result = parseInt(numOne) - parseInt(numTwo)
        resultWrap.innerHTML = result
    }
    else if (oper == '/'){
        let result = parseInt(numOne) / parseInt(numTwo)
        resultWrap.innerHTML = result
    }
    else if (oper == '*'){
        let result = parseInt(numOne) * parseInt(numTwo)
        resultWrap.innerHTML = result
    }
    
    
})
