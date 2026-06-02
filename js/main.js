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


// Incorporado 27/05. Eventos para Dudas

document.getElementById('icons1').addEventListener('click',function () { this.innerHTML='Programas de empleo y formación de carácter temporal, para mejorar la empleabilidad de jovenes desempleados/as mediante la cualificación en certificados de profesionalidad y la ejecución de obras de utilidad pública'; this.style.fontSize='small'});

document.getElementById('icons2').addEventListener('click',function () { this.innerHTML='Centro de Educación de Adultos del Nalón <br>Palacio Valdés, s/n <br> Sotrondio 33950'; this.style.fontSize='small'});

document.getElementById('icons3').addEventListener('click',function () { this.innerHTML='Comenzamos el 1 de abril de 2026 con la fase de formaci&oacute;n y posteriormente el 01 de julio de 2026 se comienza la fase de obra hasta el 31 de marzo de 2027'; this.style.fontSize='small'});
