

// get api from IPify
let result = document.getElementById('result')


    window.addEventListener('load', () => {
        setTimeout(() => {
        fetch('https://api.ipify.org?format=json')
        .then((res) => res.json())
        .then((data) => {
            let userIP = data.ip
            fetch(`https://ipinfo.io/${userIP}/geo`)
            .then((locRes) => locRes.json())
            .then((locData) => {
                result.innerHTML = `<p>Sike! you're from</p><h1>${locData.city}, ${locData.country}</h1>`
                
            })
        }) 
    }, 4000)

})


// pass IP insto IPINFO