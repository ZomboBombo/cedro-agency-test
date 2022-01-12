const initSwiperSlider = () => {
  // --------- DOM-элементы ---------
  const seasonTrendsSliderBox = document.querySelector('.season-trends__slider');

  // *** Проверка на Слайдера ***
  if (!seasonTrendsSliderBox) {
    return;
  }

  /*
  * ==========================================================
  * --------- Настройки для слайдера «Тренды сезона» ---------
  * ==========================================================
  */

  /* eslint-disable-next-line */
  const seasonTrendsSlider = new window.Swiper(seasonTrendsSliderBox, {
    slidesPerView: 'auto',
    spaceBetween: 8,

    grabCursor: true,

    breakpoints: {
      1024: {
        spaceBetween: 32,
      },
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      paginationBulletMessage: 'Переключиться на слайд {{index}}',
    },
  });
};


export { initSwiperSlider };
