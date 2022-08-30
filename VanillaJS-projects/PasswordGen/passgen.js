

let subBtn = document.getElementById('sub-btn')
let resultWrap = document.getElementById('result-wrap')
subBtn.addEventListener('click', () => {

    let passwordLength = document.getElementById('length').value
    let chars = '!@#$%^&*()qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'
    
    password = ''

    if(passwordLength >= 1 && passwordLength < 15){
        for(let i=0; i < passwordLength; i++){
        
            let rand = Math.floor(Math.random() * chars.length)
            
            password += chars[rand]
            
        }
        resultWrap.innerHTML = password
    }
    else{
        resultWrap.innerHTML = 'Error! Password length should be between 1-15 characters long.'
    }
    
})