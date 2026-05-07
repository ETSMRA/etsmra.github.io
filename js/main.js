// Weather api 
const API_KEY = "b31235d5cc58dfc8950b81d37368ad9c";
const City = "San Martin del Rey Aurelio";

async function getWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=${API_KEY}&lang=es`
        );

        const data = await response.json();

        

  
        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
        document.getElementById("condition").innerText = data.weather[0].description;

    } catch (error) {
        console.log("Erro ao buscar clima:", error);
    }
}

getWeather();


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