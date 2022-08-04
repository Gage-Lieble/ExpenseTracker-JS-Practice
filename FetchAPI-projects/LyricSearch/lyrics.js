

let subBtn = document.getElementById('submit-btn')
let thumbnailSpan = document.getElementById('thumbnail')
let titleSpan = document.getElementById('title')
let artistSpan = document.getElementById('artist')
let lyricsSpan = document.getElementById('lyrics')
let yearSpan = document.getElementById('year')



subBtn.addEventListener('click', function(){
    let songName = document.getElementById('song-name').value
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3d1a0dc009mshf76f2e33c4f1d17p1576acjsnc3a97be24047',
            'X-RapidAPI-Host': 'genius.p.rapidapi.com'
        }
    }
    
    fetch(`https://genius.p.rapidapi.com/search?q=${songName}`, options)
    .then(response => response.json())
    .then(data => {
        
        outputData = data
        let artistName = outputData.response.hits[0].result.artist_names
        let title = outputData.response.hits[0].result.title
        let thumbnail = outputData.response.hits[0].result.song_art_image_url
        let lyrics = outputData.response.hits[0].result.url
        let year = outputData.response.hits[0].result.release_date_for_display
        
        thumbnailSpan.innerHTML = `<img src='${thumbnail}'>`
        titleSpan.innerHTML = `<h1>${title}</h1>`
        artistSpan.innerHTML = `<p>Artist(s): ${artistName}</p>`
        yearSpan.innerHTML = `<p>Realesed: ${year}</p>`
        lyricsSpan.innerHTML = `<a href='${lyrics}'>Lyrics ></a>`
        let pageTitle = document.querySelector('title')
        pageTitle.innerHTML = `Lyrics | ${title}`
        })
        
        
        document.getElementById('song-name').value = ''
    })

    
    
        
        // .catch(err => console.error(err));
        
        
        


