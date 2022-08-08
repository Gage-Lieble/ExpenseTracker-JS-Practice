


let start = 0;
let images =[]
let time = 1000;

images[0] = 'imgs/1.jpg'
images[1] = 'imgs/2.jpg'
images[2] = 'imgs/3.jpg'
images[3] = 'imgs/4.jpg'

let slide = document.getElementById('slide')


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


