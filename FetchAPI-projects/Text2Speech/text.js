

let subBtn = document.getElementById('sub-btn')

subBtn.addEventListener('click', () => {
    let userInp = document.getElementById('userinp').value
    let voice = document.getElementById('voice-options').value
    responsiveVoice.speak(userInp, voice);
})