
let subBtn = document.getElementById('subBtn')


subBtn.addEventListener('click', function(){

    let userQrText = document.getElementById('user-qr-text').value
    let imgHolder = document.getElementById('imgHolder')
    console.log(userQrText)
    imgHolder.innerHTML = `<img src='http://api.qrserver.com/v1/create-qr-code/?data=${userQrText}&size=150x150'><h4 style='margin-top: 50px; font-size: 17px;'>Take out any phone camera and use it to scan your custom qr code!</h4>`
})
