function initZonaSwiper(el, prev, next, pag){
  new Swiper(el, {
    loop: true,
    navigation: { nextEl: next, prevEl: prev },
    pagination: { el: pag, clickable: true },

    /* --- separación por defecto (≤575 px) --- */
    spaceBetween: 6,

    breakpoints:{
      576:  { slidesPerView: 2, spaceBetween: 12 }, // ≥576 px
      768:  { slidesPerView: 2, spaceBetween: 20 }, // ≥768 px
      1200:  { slidesPerView: 3, spaceBetween: 20 }, // ≥768 px
      1800: { slidesPerView: 4, spaceBetween: 50 }  // ≥1300 px
    }
  });
}

initZonaSwiper('.sierra-carousel', '.sierra-prev', '.sierra-next', '.sierra-pagination');
initZonaSwiper('.selva-carousel' , '.selva-prev' , '.selva-next' , '.selva-pagination');
initZonaSwiper('.costa-carousel' , '.costa-prev' , '.costa-next' , '.costa-pagination');
