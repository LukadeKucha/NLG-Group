// Get all necessary elements from the DOM
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnails img');
const slideButtons = document.querySelectorAll('.slide-button');

// Initialize current slide index and thumbnail index for each slide
let currentSlideIndex = 0;
let thumbnailIndex = [];

// Loop through all slides to get their thumbnail indexes
slides.forEach((slide, index) => {
  thumbnailIndex.push([]);
  const slideThumbnails = slide.querySelectorAll('.thumbnails img');
  slideThumbnails.forEach((thumbnail, i) => {
    thumbnailIndex[index].push(i);
  });
});

// Function to change slide
const changeSlide = (index) => {
  // Deactivate all slides and thumbnail images
  slides.forEach((slide) => slide.classList.remove('active'));
  thumbnails.forEach((thumbnail) =>
    thumbnail.classList.remove('active')
  );

  // Activate the current slide and thumbnail image
  slides[index].classList.add('active');
  thumbnails[thumbnailIndex[index][0]].classList.add('active');
  const activeThumbnail = thumbnails[thumbnailIndex[index][0]];
  activeThumbnail.classList.add('active');
  // activeThumbnail.style.border = '2px solid red'; // add border to the active thumbnail
  currentSlideIndex = index;

  // Activate the corresponding slide button
  slideButtons.forEach((button) => button.classList.remove('active'));
  slideButtons[index].classList.add('active');
};

// Loop through all thumbnails to add event listener
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    const slideIndex = thumbnail.dataset.slide - 1;
    const thumbnailIndex = thumbnail.dataset.index;
    const mainImg = slides[slideIndex].querySelector('.main-img');
    const newSrc = thumbnail.src;

    // Change the main image of the current slide
    mainImg.src = newSrc;

    // Deactivate all thumbnail images
    thumbnails.forEach((thumbnail) =>
      thumbnail.classList.remove('active')
    );

    // Activate the clicked thumbnail image
    thumbnail.classList.add('active');

    // Change the current slide
    changeSlide(slideIndex);
    if (thumbnailIndex !== '0') {
      mainImg.style.top = '0'; // Set style.top to 0
    } else {
      mainImg.style.removeProperty('top'); // Remove the style.top property
    }
  });
});

// Loop through all slide buttons to add event listener
slideButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Change slide according to the clicked button
    changeSlide(index);
  });
});

// Activate the first slide and thumbnail image
changeSlide(currentSlideIndex);
thumbnails[thumbnailIndex[currentSlideIndex][0]].classList.add('active');

// Next and Prev slides

// Add event listeners to the prev and next buttons
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slidess = document.querySelectorAll('.slide');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
  // Deactivate all thumbnail images
  thumbnails.forEach((thumbnail) =>
    thumbnail.classList.remove('active')
  );

  slidess[currentIndex].classList.remove('active');
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slidess.length - 1;
  }
  const currentSlide = slidess[currentIndex];
  currentSlide.classList.add('active');
  const currentSlideThumbnails = currentSlide.querySelectorAll('.thumbnails img');
  currentSlideThumbnails[0].classList.add('active');
});

nextButton.addEventListener('click', () => {
  // Deactivate all thumbnail images
  thumbnails.forEach((thumbnail) =>
    thumbnail.classList.remove('active')
  );

  slidess[currentIndex].classList.remove('active');
  currentIndex++;
  if (currentIndex >= slidess.length) {
    currentIndex = 0;
  }
  // Deactivate all thumbnail images
  thumbnails.forEach((thumbnail) => thumbnail.classList.remove('active'));

  // Activate the thumbnail image of the current slide
  const slideThumbnails = slidess[currentIndex].querySelectorAll('.thumbnails img');
  const activeThumbnail = slideThumbnails[0];
  activeThumbnail.classList.add('active');
  // activeThumbnail.style.border = '2px solid red'; // add border to the active thumbnail

  // Change the current slide
  changeSlide(currentIndex);
});
