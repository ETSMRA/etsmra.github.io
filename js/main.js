// Header Shadow

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-row');

    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// carousel
const slides = document.querySelectorAll('.carousel img');
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove('active'));

    slides[index].classList.add('active');

    index++;
    if (index >= slides.length) {
        index = 0;
    }
}

setInterval(showSlide, 3500);


// Hamburger menu
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
          
        }
    });
});


const elementsToAnimate = document.querySelectorAll('.hidden');
elementsToAnimate.forEach((el) => observer.observe(el));


const hamburger = document.querySelector('.hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
