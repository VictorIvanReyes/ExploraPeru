  /* 1.  referencias --------------------------------------- */
  const input   = document.querySelector('.search-input');
  const button  = document.querySelector('.search-button');
  const resBox  = document.getElementById('searchResultsSwiper');
  const resWrap = document.getElementById('searchResultsWrapper');
  let   resultSwiper = null;          // se crea la 1.ª vez

  /* 2.  lógica de búsqueda -------------------------------- */
  function buscarDestinos(txt){
    const term = txt.trim().toLowerCase();
    resWrap.innerHTML = '';           // limpia carrusel de resultados

    if(term === ''){
      resBox.style.display = 'none';  // nada que mostrar
      return;
    }

    /* recolecta slides de los carruseles base (sin duplicados) */
    const slides = [...document.querySelectorAll('.swiper-slide')]
                   .filter(s => !s.classList.contains('swiper-slide-duplicate'));

    const matches = slides.filter(slide => {
      const t = slide.querySelector('.case-title')?.textContent.toLowerCase() || '';
      const z = slide.querySelector('.case-tag')  ?.textContent.toLowerCase() || '';
      return t.includes(term) || z.includes(term);
    });

    /* clona cada slide y lo mete en el wrapper de resultados */
    matches.forEach(slide => resWrap.appendChild(slide.cloneNode(true)));

    if(matches.length){
      resBox.style.display = '';      // lo hacemos visible

      if(!resultSwiper){              // primera vez → instanciar
        resultSwiper = new Swiper('.search-swiper', {
          loop:false,                 // no hace falta duplicar
          navigation:{ nextEl:'.search-next', prevEl:'.search-prev' },
          pagination:{ el:'.search-pagination', clickable:true },
          spaceBetween:6,
          breakpoints:{
            576:{slidesPerView:2,spaceBetween:12},
            768:{slidesPerView:2,spaceBetween:20},
            1200:{slidesPerView:3,spaceBetween:42},
            1800:{slidesPerView:4,spaceBetween:50}
          }
        });
      }else{
        resultSwiper.update();        // ya existe → refresca
      }
    }else{
      resBox.style.display = 'none';  // cero coincidencias
    }
  }

  /* 3.  eventos ------------------------------------------- */
  input .addEventListener('input', () => buscarDestinos(input.value));
  button.addEventListener('click', e => {
    e.preventDefault();
    buscarDestinos(input.value);
  });


  /*Por si no se encuntra nada en el buscador */

  function toggleNoResults(){
    const anyVisible = [...document.querySelectorAll('.swiper-slide')]
                       .some(slide => slide.style.display !== 'none');
    document.getElementById('noResults').style.display = anyVisible ? 'none' : '';
  }

  /* Llama a la función dentro de filtraDestinos */
  function filtraDestinos(term){
    /* …código anterior… */
    toggleNoResults();
  }