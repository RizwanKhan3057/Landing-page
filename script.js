let currentSlide = 0;

const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Loop to last slide
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Loop to first slide
    }

    updateSlider();
}

function updateSlider() {
    const slider = document.getElementById('carSlider');
    const offset = -currentSlide * 100; // Move slider by 100% of image width
    slider.style.transform = `translateX(${offset}%)`;
}

// Show contact information
function showContactInfo() {
    const contactInfo = document.getElementById('contact-info');
    if (contactInfo.style.display === 'none' || contactInfo.style.display === '') {
        contactInfo.style.display = 'block';
    } else {
        contactInfo.style.display = 'none';
    }
}

