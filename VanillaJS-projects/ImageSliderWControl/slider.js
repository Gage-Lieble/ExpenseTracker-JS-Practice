
let left = document.getElementById('left')
let right = document.getElementById('right')

let start = 0;
let images =[]
let time = 3000;



images[0] = 'imgs/1.jpg'
images[1] = 'imgs/2.jpg'
images[2] = 'imgs/3.jpg'
images[3] = 'imgs/4.jpg'

let slide = document.getElementById('slide')


left.addEventListener('click', function(){
    start -= 2
    
    if (start < 0){
        start = 3
        slide.src = images[3]
    }
    else {
        
        slide.src = images[start]
    }

    
    
})

right.addEventListener('click', function(){

    if (start > 2){
            start = -1
    }
    start += 1
    slide.src = images[start]
    
    
})



function changeImg(){
    slide.src = images[start]

    if (start < images.length - 1){
        start ++ 
    }
    else {
        start = 0
    }
    setTimeout('changeImg()', time)
}

changeImg()
    