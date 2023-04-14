const carousel = document.querySelector('.carousel');
const carouselSlides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let currentIndex = 0;
let slideInterval;

// Move carousel to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselSlides.length;
  carousel.style.transform = `translateX(-${currentIndex * 50}%)`;
}

// Move carousel to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + carouselSlides.length) % carouselSlides.length;
  carousel.style.transform = `translateX(-${currentIndex * 50}%)`;
}

// Add event listeners for previous and next buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Set automatic slide interval
// slideInterval = setInterval(() => {
//   nextSlide();
// }, 4000);
