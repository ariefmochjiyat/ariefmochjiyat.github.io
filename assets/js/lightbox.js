const images = document.querySelectorAll('.card #imglightbox');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const closeLightboxButton = document.querySelector('.close-button');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

lightbox.style.display = 'none';

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightbox.style.opacity = 1; // Fade in the lightbox
        lightboxImage.src = image.src;
        currentIndex = index;
    });
});

closeLightboxButton.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', closeLightboxByShade);

function closeLightbox() {
    lightbox.style.opacity = 0; // Fade out the lightbox
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 300); // Delay the display: none; until the fade-out animation is complete
}

function closeLightboxByShade(event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightbox.style.opacity = 0; // Start with a fade-out animation
    setTimeout(() => {
        lightboxImage.src = images[currentIndex].src;
        lightbox.style.opacity = 1; // Fade in the new image
    }, 300); // Delay the image change until the fade-out animation is complete
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    lightbox.style.opacity = 0; // Start with a fade-out animation
    setTimeout(() => {
        lightboxImage.src = images[currentIndex].src;
        lightbox.style.opacity = 1; // Fade in the new image
    }, 300); // Delay the image change until the fade-out animation is complete
}