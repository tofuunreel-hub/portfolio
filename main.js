// Boutton burger
const burgerButton = document.querySelector('.burger-contact');
const closeButton = document.querySelector('.close-contact');
const infoContact = document.querySelector('.info-contact');

burgerButton.addEventListener('click', () => {
    closeButton.classList.add('select');
    burgerButton.classList.remove('select');
    infoContact.classList.add('activ');
})

closeButton.addEventListener('click', () => {
    burgerButton.classList.add('select');
    closeButton.classList.remove('select');
    infoContact.classList.remove('activ');
})

// carousel information étude/personnel
var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// carousel information projet
var swipertwo = new Swiper(".swiper-two", {
    effect: "coverflow",
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
});