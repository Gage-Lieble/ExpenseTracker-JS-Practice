
let subBtn = document.getElementById('submit-btn')
let resultBox = document.getElementById('result-cont')
let avatarCont = document.getElementById('avatar-cont')
let userCont = document.getElementById('username-cont')
let nameCont = document.getElementById('name-cont')
let followerCont = document.getElementById('follower-cont')


subBtn.addEventListener('click', function() { // Checks for form submit
    let userSearch = document.getElementById('search-bar').value
    console.log(`Hey ${userSearch} I see that you're looking into the console.`)
    setTimeout(() => {fetch(`https://api.github.com/users/${userSearch}`)
    .then((response) => response.json())
    .then((data) => output = data)
    

    setTimeout(() =>{
    let login = output.login
    let avatar = output.avatar_url
    let followers = output.following
    let name = output.name

    if(output.login === undefined){ // checks for search error
      login = ''
      avatar = ''
      followers = ''
      name = ''
      }
    else{
      login = output.login
      avatar = output.avatar_url
      followers = output.following
      name = output.name
    }
    if(name === null){
      nameCont.innerHTML = ``
    }
    else {
      nameCont.innerHTML = `<h3>${name}</h3>`
    }
    
    avatarCont.innerHTML = `<img src='${avatar}'>` // placing data into html
    userCont.innerHTML = `<h1>${login}</h1>`
    
    if(followers === 1 || followers){
      followerCont.innerHTML = `<h3>${followers} follower</h3>`}
    else if (followers === ''){
      followerCont.innerHTML = `That user does not exist.`
    }
    else{
      followerCont.innerHTML = `<h3>${followers} followers</h3>`
    }
    
    let docTitle = document.querySelector('title')

    if (name === ''){
      docTitle.innerHTML = `Github Search | Doesn't exist`
    }
    else {
      docTitle.innerHTML = `Github Search | ${name}`
    }
    }, 150)
  }, 100)
  
  

})
