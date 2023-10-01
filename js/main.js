//Слайдер для картинок
const sliderMain = new Swiper('.slider--main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60,
        }
    }
});

//Слайдер для фона картинок
const sliderBg = new Swiper('.slider--bg', {
    centeredSlides: true,
    parallax: true,
    slidesPerView: 3.5,
    spaceBetween: 60,
});

sliderMain.controller.control = sliderBg;

//Открытие картинки
document.querySelectorAll('.slider__item').forEach(item => {
    item.addEventListener('click', Event => {
        item.classList.toggle('opened')
    });
});

//Триггер для скрытия текста
const desc = document.querySelector('.desc');

sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden');
});