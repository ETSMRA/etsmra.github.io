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

if (slides.length > 0) {
    let index = 0;

    function showSlide() {
        slides.forEach(slide => slide.classList.remove('active'));

        if (!slides[index]) return;

        slides[index].classList.add('active');

        index++;
        if (index >= slides.length) {
            index = 0;
        }
    }
 // Eliminar el banner-content 
   setTimeout(function() { 
            document.getElementsByClassName('banner-content')[0].style.opacity = 0;
            } , 2000);
            
    setInterval(showSlide, 3000);
}

// setInterval(showSlide, 3500);


// Hamburger menu
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
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


// Carousel noticias
document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".carousel-img");
    const tabs = document.querySelectorAll(".info-tab");

    if (images.length === 0 || tabs.length === 0) return;

    let currentIndex = 0;
    let carouselInterval;

    function changeSlide(index) {

        images.forEach(img => {
            img.classList.remove("active");
        });

        tabs.forEach(tab => {
            tab.classList.remove("active");
        });

        
        if (!images[index] || !tabs[index]) return;

        images[index].classList.add("active");
        tabs[index].classList.add("active");

        currentIndex = index;
        
   /* Animación de la barra lateral del carrusel */
    const sidebar = document.querySelector(".carousel-info-sidebar");

    sidebar.scrollTo({
        top: tabs[index].offsetTop -110, 
     /*   behavior: "smooth" */
    });
    }

    function startAutoSlide() {

        carouselInterval = setInterval(() => {

            let nextIndex = (currentIndex + 1) % images.length;

            changeSlide(nextIndex);

        }, 5000);
    }

    tabs.forEach((tab, index) => {

        tab.addEventListener("click", (e) => {
       
            if (e.target.classList.contains('btn-sm')) return;

            clearInterval(carouselInterval);

            changeSlide(index);

            startAutoSlide();
        });

    });

    changeSlide(0);
    startAutoSlide();

});

// Incorporado 27/05. Eventos para Dudas

const icons1 = document.getElementById('icons1');
const icons2 = document.getElementById('icons2');
const icons3 = document.getElementById('icons3');

if (icons1) {
    icons1.addEventListener('click', function () {
        this.innerHTML = 'Programas de empleo y formación de carácter temporal, para mejorar la empleabilidad de jóvenes desempleados/as mediante la cualificación en certificados de profesionalidad y la ejecución de obras de utilidad pública';
        this.style.fontSize = 'small';
    });
}

if (icons2) {
    icons2.addEventListener('click', function () {
        this.innerHTML = 'Centro de Educación de Adultos del Nalón <br>Palacio Valdés, s/n <br>Sotrondio 33950';
        this.style.fontSize = 'small';
    });
}

if (icons3) {
    icons3.addEventListener('click', function () {
        this.innerHTML = 'Comenzamos el 1 de abril de 2026 con la fase de formación y posteriormente el 01 de julio de 2026 se comienza la fase de obra hasta el 31 de marzo de 2027';
        this.style.fontSize = 'small';
    });
}

