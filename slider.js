// Get the slider container
const sliderContainer = document.querySelector(".slider");

// Get the next and previous buttons
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

// Get the slides
const slides = Array.from(document.querySelectorAll(".slide"));

// Set the initial active slide index
let activeSlideIndex = 0;

// Function to show the active slide
function showActiveSlide() {
  slides.forEach((slide, index) => {
    if (index === activeSlideIndex) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

// Event listener for next button
nextButton.addEventListener("click", () => {
  activeSlideIndex++;
  if (activeSlideIndex >= slides.length) {
    activeSlideIndex = 0;
  }
  showActiveSlide();
});

// Event listener for previous button
prevButton.addEventListener("click", () => {
  activeSlideIndex--;
  if (activeSlideIndex < 0) {
    activeSlideIndex = slides.length - 1;
  }
  showActiveSlide();
});
