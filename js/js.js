var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

(function Accordion() {
    const [...acocrdion_containers] = document.querySelectorAll('[data-accordion]');

    acocrdion_containers.forEach((accordion) => {
        const [...accordion_titles] = accordion.querySelectorAll('.accordion-title');

        accordion_titles.forEach((title) => {
            title.addEventListener('click', () => open(title, accordion_titles))
        })
    });

    function open(title, siblings) {
        siblings.forEach(item => item.classList.remove('active'));
        title.classList.add('active');
    }
})();