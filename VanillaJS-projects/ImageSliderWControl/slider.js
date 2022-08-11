
// Buttons
let left = document.getElementById('left')
let right = document.getElementById('right')

// Params
let start = 0;
let images =[]
let pills = []
let time = 3000;
let slide = document.getElementById('slide')

// Images
images[0] = 'imgs/1.jpg'
images[1] = 'imgs/2.jpg'
images[2] = 'imgs/3.jpg'
images[3] = 'imgs/4.jpg'

// Pills
let pill1 = document.getElementById('pill1')
let pill2 = document.getElementById('pill2')
let pill3 = document.getElementById('pill3')
let pill4 = document.getElementById('pill4')

pills[0] = pill1
pills[1] = pill2
pills[2] = pill3
pills[3] = pill4



// Functions
left.addEventListener('click', function(){
    start -= 1
    if (start < 0){
        start = 3
        slide.src = images[3]
        // pills[3].style.backgroundColor = 'red'
    }
    else {
        
        slide.src = images[start]

    };

    
    
});

right.addEventListener('click', function(){
    if (start > 2){
            start = -1
    }
    start += 1
    slide.src = images[start]

})

// Auto Slide
function changeImg(){
    slide.src = images[start]
    pills[start].style = 'background-color: grey'
    if(start > 0){
        pills[start - 1].style = 'background-color: light-grey'
    }
    else if (start === 0){
        pills[3].style = 'background-color: light-grey'
    }
    
    if (start < images.length - 1){
        
        start ++ 
        
    }
    else {
       
        start = 0
    }
    setTimeout('changeImg()', time)
}
changeImg()
    