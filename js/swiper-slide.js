const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 30,
        }
    }
})