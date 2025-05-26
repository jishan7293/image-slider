let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlides() {
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > totalSlides) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Show the first slide initially
showSlides();

// Previous and Next button controls
document.querySelector('.prev').onclick = () => {
    slideIndex -= 2; // decrease by 2 because it will be incremented in showSlides
    showSlides();
};

document.querySelector('.next').onclick = showSlides;

// Dot indicator functionality
function currentSlide(n) {
    slideIndex = n;
    showSlides();
}
