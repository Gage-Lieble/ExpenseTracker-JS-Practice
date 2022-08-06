



let subBtn = document.getElementById('submit')
let userDetails = document.getElementById('user-details')

subBtn.addEventListener('click', function(){
    let firstName = document.getElementById('name').value
    let email = document.getElementById('email').value

    class userCreate {
        constructor(name, email){
            this.email = email
            this.name = name
        }
    }
    let userOne = new userCreate(firstName, email)
    userDetails.innerHTML = `<p>Name: ${userOne.name}</p> <p>Email: ${userOne.email}</p>`
    console.log(userOne)

})