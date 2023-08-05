const prev = document.getElementById("left"),
    next = document.getElementById("right"),
    slides = document.querySelectorAll(".carousel__elem"),
    slidesWrap = document.querySelectorAll(".carousel");

let index = 0;
console.log(next);
const activeSlide = (n) => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
    slides[n].classList.add('active');
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        ++index;
        activeSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        --index;
        activeSlide(index);
    }
}
// if (next != null) {
    next.addEventListener('click', nextSlide);
// }
//
// if (prev != null) {
    prev.addEventListener('click', prevSlide);
// }