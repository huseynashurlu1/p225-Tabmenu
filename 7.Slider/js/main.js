
var mySlider = [
    "images/image1.png",
    "images/image2.jpg",
    "images/image3.jpg"
]

let image = document.querySelector('#slider img');
let currentSlide = 0;
image.src = mySlider[currentSlide];

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');


next.onclick = function() {
    currentSlide++;
    if(currentSlide == mySlider.length) {
        currentSlide = 0;
    }
    image.src = mySlider[currentSlide];
}

prev.onclick = function() {
    currentSlide--;
    if(currentSlide == -1) {
        currentSlide = mySlider.length - 1;
    }
    image.src = mySlider[currentSlide]
}


function AutoPlay() {
        currentSlide++;
        if(currentSlide == mySlider.length) {
            currentSlide = 0;
        }
        image.src = mySlider[currentSlide];
}

setInterval(AutoPlay,2000);

