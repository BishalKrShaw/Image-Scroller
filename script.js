const images = document.querySelectorAll(".image-container img");
const slider = document.querySelector(".slider");
const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");

let imageNumber = 1;
let imgLength = images.length;

// Right Arrow Function
function rightSlider() {
    if(imageNumber < imgLength){
        slider.style.transform = `translateX(-${imageNumber * 350}px)`;
        imageNumber++;
    }
    if(imageNumber == imgLength) {
        imageNumber = 0;
    }
}

rightBtn.addEventListener("click", rightSlider);

// Left Arrow Function
function leftSlider() {
    console.log(imgLength);
    if(imgLength) {
        slider.style.transform = `translateX(-${(imgLength - 1) * 350}px)`;
        imgLength--;
    }
    if(imgLength < 1){
        imgLength = images.length;
    }
}

leftBtn.addEventListener("click", leftSlider);