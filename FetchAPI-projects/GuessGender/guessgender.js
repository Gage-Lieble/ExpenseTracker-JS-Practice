

let subBtn = document.getElementById('sub-btn')

subBtn.addEventListener('click', () => {
    let userName = document.getElementById('user-name').value
    let nameWrap = document.getElementById('name-wrap')
    let genderWrap = document.getElementById('gender-wrap')
    let probWrap = document.getElementById('prob-wrap')

    fetch(`https://api.genderize.io/?name=${userName}`)
    .then((res) => res.json())
    .then((data) => {
        nameWrap.innerHTML = `I think the name "${data.name}"`
        genderWrap.innerHTML = `is ${data.gender}`
        probWrap.innerHTML = `and I am ${data.probability}% positive`
    })
    

})