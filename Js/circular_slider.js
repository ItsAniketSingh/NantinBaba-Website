const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slideWidth = 300; // width of each slide
let slidePosition = 0; // current position of the slider

// move the slider to the specified position
function moveToSlide(position) {
    slider.style.transform = `translateX(-${position}px)`;
}

// move the slider to the next slide
function nextSlide() {
    if (slidePosition === (slider.children.length - 1) * slideWidth) {
        // if at the end, move to the first slide
        slidePosition = 0;
    } else {
        slidePosition += slideWidth;
    }
    moveToSlide(slidePosition);
}

// move the slider to the previous slide
function prevSlide() {
    if (slidePosition === 0) {
        // if at the beginning, move to the last slide
        slidePosition = (slider.children.length - 1) * slideWidth;
    } else {
        slidePosition -= slideWidth;
    }
    moveToSlide(slidePosition);
}

// move to the next slide every 4 seconds
setInterval(nextSlide, 4000);

// add event listeners to the buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);