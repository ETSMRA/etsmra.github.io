// ================================
// HEADER SHADOW
// ================================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header-row");

    if (!header) return;

    if (window.scrollY > 10) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ================================
// CAROUSEL HOME (Banner)
// ================================

const slides = document.querySelectorAll(".carousel img");

if (slides.length > 0) {

    let index = 0;

    function showSlide() {

        slides.forEach(slide =>
            slide.classList.remove("active")
        );

        slides[index].classList.add("active");

        index++;

        if (index >= slides.length)
            index = 0;

    }

    setTimeout(() => {

        const banner = document.querySelector(".banner-content");

        if (banner)
            banner.style.opacity = 0;

    }, 2000);

    setInterval(showSlide, 3000);

}


// ================================
// INTERSECTION OBSERVER
// ================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});


function animationStart() {

    document.querySelectorAll(".hidden").forEach(el => {

        observer.observe(el);

    });

}


// ================================
// MENU HAMBURGER
// ================================

const hamburger = document.querySelector(".hamburger");
const menu = document.getElementById("menu");

if (hamburger && menu) {

    hamburger.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}


// ================================
// DÚDAS
// ================================

const icons1 = document.getElementById("icons1");

if (icons1) {

    icons1.addEventListener("click", function () {

        this.innerHTML =
            "Programas de empleo y formación de carácter temporal, para mejorar la empleabilidad de jóvenes desempleados/as mediante la cualificación en certificados de profesionalidad y la ejecución de obras de utilidad pública";

        this.style.fontSize = "small";

    });

}


const icons2 = document.getElementById("icons2");

if (icons2) {

    icons2.addEventListener("click", function () {

        this.innerHTML =
            "Centro de Educación de Adultos del Nalón <br> Palacio Valdés, s/n <br> Sotrondio 33950";

        this.style.fontSize = "small";

    });

}


const icons3 = document.getElementById("icons3");

if (icons3) {

    icons3.addEventListener("click", function () {

        this.innerHTML =
            "Comenzamos el 1 de abril de 2026 con la fase de formación y posteriormente el 01 de julio de 2026 se comienza la fase de obra hasta el 31 de marzo de 2027";

        this.style.fontSize = "small";

    });

}


// ================================
// NEWS PAGE
// ================================

document.addEventListener("DOMContentLoaded", async () => {

    animationStart();

    try {

        const response = await fetch("./news.json");

        if (!response.ok) {
            throw new Error("No json found");
        }

        const news = await response.json();

        createNews(news);

        initializeNewsCarousel();

        animationStart();

    } catch (error) {

        console.error(error);

    }

});

function createNews(news) {

    const carousel = document.querySelector(".carousel-images");
    const sidebar = document.querySelector(".carousel-info-sidebar");
    const newsContainer = document.querySelector(".main-news-section");

    if (!carousel || !sidebar || !newsContainer) {
        return;
    }

    carousel.innerHTML = "";
    sidebar.innerHTML = "";
    newsContainer.innerHTML = "";


    news.forEach((item, index) => {

        // Images
        carousel.innerHTML += `
            <img
                src="${item.image}"
                alt="${item.alt}"
                class="carousel-img ${index === 0 ? "active" : ""}">
        `;

        // Sidebar
        sidebar.innerHTML += `
            <div class="info-tab ${index === 0 ? "active" : ""}">
                <h3>${item.title}</h3>
                <p>${item.summary}</p>
                <a href="#news-${item.id}" class="btn-sm">Ver más</a>
            </div>
        `;

        // News
        newsContainer.innerHTML += `
            <article class="news-block hidden" id="news-${item.id}">

                <div class="news-image-box">
                    <img src="${item.image}" alt="${item.alt}">
                </div>

                <div class="news-content-box">

                    <h3>${item.title}</h3>

                    ${item.content.map(paragraph => `
                        <p>${paragraph}</p>
                    `).join("")}

                </div>

            </article>
        `;
    });

}

function initializeNewsCarousel(){

    const image = document.querySelectorAll(".carousel-img");
    const tabs = document.querySelectorAll(".info-tab");

    if(image.length===0) return;

    let currentIndex=0;
    let interval;

    function changeSlide(index){

        image.forEach(img=>img.classList.remove("active"));
        tabs.forEach(tab=>tab.classList.remove("active"));

        image[index].classList.add("active");
        tabs[index].classList.add("active");

        currentIndex=index;

        document.querySelector(".carousel-info-sidebar").scrollTo({

            top:tabs[index].offsetTop-110,
            behavior:"smooth"

        });

    }

    function auto(){

        interval=setInterval(()=>{

            changeSlide((currentIndex+1)%image.length);

        },6000);

    }

    tabs.forEach((tab,index)=>{

        tab.addEventListener("click",e=>{

            if(e.target.classList.contains("btn-sm")) return;

            clearInterval(interval);

            changeSlide(index);

            auto();

        });

    });

    changeSlide(0);

    auto();

}