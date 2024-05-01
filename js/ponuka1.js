const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.button_carousel--right') ;
const prevButton = document.querySelector('.button_carousel--left') ;
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
   targetDot.classList.add('current-slide')
}

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left +')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

slides.forEach(setSlidePosition);

nextButton.addEventListener('click', e => {
    const currentSlide = document.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide)

    updateDots(currentDot,nextDot)
})

prevButton.addEventListener('click', e => {
    const currentSlide = document.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;

    moveToSlide (track, currentSlide, prevSlide)

    updateDots(currentDot,prevDot)
})




