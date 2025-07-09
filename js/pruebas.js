// main.js
import { ACTIVITIES } from './Actividades.js';

document.addEventListener('DOMContentLoaded', () => {
  // ─── 0. Validar departamento ───────────────────────────────────────
  const dept = (document.body.dataset.dpto || 'CUSCO').toUpperCase();
  if (!ACTIVITIES[dept]) {
    alert(`No hay actividades para “${dept}”.`);
    return;
  }

  // ─── 1. Referencias DOM ────────────────────────────────────────────
  const citySelect     = document.getElementById('citySelect');
  const actWrapper     = document.getElementById('actWrapper');
  const personsInput   = document.getElementById('numPersons');
  const incP           = document.getElementById('incP');
  const decP           = document.getElementById('decP');
  const addBtn         = document.getElementById('addToCart');
  const badge          = document.getElementById('selectedCount');
  const listEl         = document.getElementById('cartItems');
  const totalEl        = document.getElementById('cartTotal');
  const progressBar    = document.getElementById('progressBar');
  const actCounter     = document.getElementById('actCounter');
  const toastContainer = document.getElementById('toastContainer');
  const TRANSPORT_FEE  = 60; // S/ por persona cuando hay >1 ciudad
  

  // ─── 2. Estado inicial ──────────────────────────────────────────────
  personsInput.value = 1;              // permitir reserva con 1 persona
  let selectedItinerary = null;        // { id, name, price, days }
  let selectedGastro    = null;        // { id, name, price }
  const selectedActs   = {};           // { [actId]: { name, price, city } }
  let selectedCities   = new Set();    // ciudades distintas
  const LS_KEY         = 'globalCart';
  let globalCart       = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
  let currentStep   = 1;
  const stepIndicator = document.getElementById('stepIndicator');
  const prevBtnPg     = document.getElementById('stepPrev');
  const nextBtnPg     = document.getElementById('stepNext');

  // ─── 3. Toast helper ────────────────────────────────────────────────
  const toast = msg => {
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    toastContainer.appendChild(t);
    setTimeout(() => t.remove(), 3500);
  };

  // ─── 4. Llenar <select> ciudades ────────────────────────────────────
  citySelect.innerHTML = '';
  const cities = Object.keys(ACTIVITIES[dept]);
  cities.forEach(city => {
    const opt = document.createElement('option');
    opt.value   = city;
    opt.textContent = city;
    citySelect.appendChild(opt);
  });
  citySelect.value = cities[0];

  // ─── 5. Stepper de personas ─────────────────────────────────────────
  incP.addEventListener('click', () => {
    personsInput.value = +personsInput.value + 1;
    personsInput.dispatchEvent(new Event('input'));
  });
  decP.addEventListener('click', () => {
    if (+personsInput.value > 1) {
      personsInput.value = +personsInput.value - 1;
      personsInput.dispatchEvent(new Event('input'));
    }
  });

  // disparar evento input inicial para habilitar “Siguiente” con 1
  personsInput.dispatchEvent(new Event('input'));

  // ─── 6. Renderizar actividades de ciudad ────────────────────────────
  function loadCityActivities(city) {
    actWrapper.innerHTML = '';
    ACTIVITIES[dept][city].forEach(a => {
      const card = document.createElement('div');
      card.className     = 'card selectable act';
      card.dataset.id    = a.id;
      card.dataset.price = a.price;
      card.dataset.city  = city;
      card.innerHTML = `
        <img src="/assets/icons/act-${a.img}.svg" alt="">
        <p>${a.label}</p><span class="precio">S/ ${a.price}</span>
      `;
      if (selectedActs[a.id]) card.classList.add('selected');
      card.addEventListener('click', () => handleActivity(card));
      actWrapper.appendChild(card);
    });
    updateUI();
  }
  citySelect.addEventListener('change', () => loadCityActivities(citySelect.value));

  // ─── 7. UI helpers ──────────────────────────────────────────────────
  function refreshBadge () {
    const badge = document.getElementById('selectedCount');
    if (badge) badge.textContent = globalCart.length;
  }
  function updateProgress() {
    if (!selectedItinerary) {
      actCounter.textContent = '(0/0)';
      progressBar.style.width = '0%';
      return;
    }
    const used = Object.keys(selectedActs).length;
    const max  = selectedItinerary.days;
    actCounter.textContent = `(${used}/${max})`;
    progressBar.style.width = `${(used/max)*100}%`;
  }
  function updateUI () {
    const limit  = selectedItinerary ? selectedItinerary.days : 0;
    const count  = Object.keys(selectedActs).length;

    /* 1 ▸ (De)habilitar cards de actividad según límite */
    document.querySelectorAll('.card.act').forEach(c => {
      c.classList.toggle(
        'disabled',
        !c.classList.contains('selected') && count >= limit
      );
    });

    /* 2 ▸ Estado del botón «Añadir» */
    const ready = !!selectedItinerary && !!selectedGastro;
    addBtn.disabled = !ready;
    addBtn.classList.toggle('enabled', ready);

    const p = Math.max(1, +personsInput.value);
    addBtn.textContent = ready ? `Añadir x${p}` : 'Añadir (0)';

    /* 3 ▸ Indicadores secundarios */
    refreshBadge();
    updateProgress();

    /* 4 ▸ Habilitar / deshabilitar flecha “→” según el paso activo */
    if (currentStep === 1) {
      nextBtnPg.disabled = !selectedItinerary;   // Paso-1 exige itinerario
    } else if (currentStep === 2) {
      nextBtnPg.disabled = !selectedGastro;      // Paso-2 exige gastronomía
    }
  }


  // ─── 8. Itinerario & gastronomía ────────────────────────────────────
  document.querySelectorAll('.card.iti')
          .forEach(c => c.addEventListener('click', () => handleItinerary(c)));
  document.querySelectorAll('.card.gastro')
          .forEach(c => c.addEventListener('click', () => handleGastro(c)));

  function handleItinerary(card) {
    const id   = card.dataset.id;
    const days = +card.dataset.days;

    if (selectedItinerary?.id === id) {
      selectedItinerary = null;
      card.classList.remove('selected');
    } else {
      document.querySelectorAll('.card.iti.selected')
              .forEach(c => c.classList.remove('selected'));
      selectedItinerary = {
        id,
        name : card.querySelector('p').textContent,
        price: +card.dataset.price,
        days
      };
      card.classList.add('selected');

      // recortar actividades sobrantes
      Object.keys(selectedActs).slice(days).forEach(k => {
        delete selectedActs[k];
        document.querySelector(`.card.act[data-id="${k}"]`)
                ?.classList.remove('selected');
      });
      // re-calcular ciudades
      selectedCities = new Set(Object.values(selectedActs).map(a => a.city));
    }
    toast('Itinerario actualizado');
    updateUI();
  }

  function handleGastro(card) {
    const id = card.dataset.id;
    if (selectedGastro?.id === id) {
      selectedGastro = null;
      card.classList.remove('selected');
    } else {
      document.querySelectorAll('.card.gastro.selected')
              .forEach(c => c.classList.remove('selected'));
      selectedGastro = {
        id,
        name : card.querySelector('p').textContent,
        price: +card.dataset.price
      };
      card.classList.add('selected');
    }
    toast('Gastronomía actualizada');
    updateUI();
  }

  // ─── 9. Selección de actividades ────────────────────────────────────
  function handleActivity(card) {
    if (!selectedItinerary) {
      toast('Primero elige un itinerario');
      return;
    }
    const id   = card.dataset.id;
    const city = card.dataset.city;

    if (selectedActs[id]) {
      delete selectedActs[id];
      card.classList.remove('selected');
      if (!Object.values(selectedActs).some(a => a.city === city)) {
        selectedCities.delete(city);
      }
      toast('Actividad quitada');
    } else {
      if (Object.keys(selectedActs).length >= selectedItinerary.days) {
        toast(`Máx. ${selectedItinerary.days} actividades`);
        return;
      }
      selectedActs[id] = {
        name : card.querySelector('p').textContent,
        price: +card.dataset.price,
        city
      };
      selectedCities.add(city);
      card.classList.add('selected');
      toast('Actividad añadida');
    }

    if (selectedCities.size > 1) {
      toast(`¡Actividades en ${selectedCities.size} ciudades! S/ ${TRANSPORT_FEE} por persona`);
    }
    updateUI();
  }

  // ─── 10. Wizard Paso 2 (personas) ──────────────────────────────────
  // const nextBtn = document.getElementById('toStep2');
  // const step2   = document.querySelector('.step-2');
  // if (nextBtn && step2) {
  //   personsInput.addEventListener('input', () => {
  //     const ok = +personsInput.value >= 1;
  //     nextBtn.disabled = !ok;
  //     nextBtn.classList.toggle('enabled', ok);
  //   });
  //   nextBtn.addEventListener('click', () => {
  //     step2.removeAttribute('data-disabled');
  //     step2.scrollIntoView({ behavior: 'smooth' });
  //   });
  // }

  // ─── 11. Modal carrito ─────────────────────────────────────────────
  const modal = document.getElementById('cartModal');
  document.getElementById('cancelModal')
          .addEventListener('click', () => modal.close());
  document.getElementById('confirmModal')
          .addEventListener('click', confirmPurchase);
  addBtn.addEventListener('click', () => {
    if (!addBtn.disabled) {
      renderModal();
      modal.showModal();
    }
  });

  function renderModal() {
    listEl.innerHTML = '';
    let subtotal = 0;
    const li = (txt, price) => {
      const el = document.createElement('li');
      el.innerHTML = `<span>${txt}</span><span>S/ ${price}</span>`;
      listEl.appendChild(el);
      subtotal += price;
    };

    const persons = Math.max(1, +personsInput.value);

    // Itinerario
    li(
      `${selectedItinerary.name} × ${persons} persona(s)`,
      selectedItinerary.price * persons
    );

    // Gastronomía
    li(
      `${selectedGastro.name} (${selectedItinerary.days} días) × ${persons}`,
      selectedGastro.price * selectedItinerary.days * persons
    );

    // Actividades
    Object.values(selectedActs).forEach(o => {
      li(`${o.name} × ${persons}`, o.price * persons);
    });

    // Tarifa transporte por persona
    if (selectedCities.size > 1) {
      li(
        `Tarifa de transporte × ${persons}`,
        TRANSPORT_FEE * persons
      );
    }

    totalEl.textContent = subtotal;
  }

  function confirmPurchase() {
    const persons = Math.max(1, +personsInput.value);
    const items   = [];

    items.push({
      label: `${selectedItinerary.name} × ${persons} persona(s)`,
      price: selectedItinerary.price * persons
    });
    items.push({
      label: `${selectedGastro.name} (${selectedItinerary.days} días) × ${persons}`,
      price: selectedGastro.price * selectedItinerary.days * persons
    });
    Object.values(selectedActs).forEach(o => {
      items.push({
        label: `${o.name} × ${persons}`,
        price: o.price * persons
      });
    });
    if (selectedCities.size > 1) {
      items.push({
        label: `Tarifa de transporte × ${persons}`,
        price: TRANSPORT_FEE * persons
      });
    }

    const total = items.reduce((sum, i) => sum + i.price, 0);
    globalCart.push({
      dept,
      persons,
      cities: [...selectedCities],
      items,
      total
    });
    localStorage.setItem(LS_KEY, JSON.stringify(globalCart));

    modal.close(); // cerrar modal del carrito
    dlgMain.close(); // cerrar modal principal
    toast('Añadido al carrito');

    // Reset de estado
    document.querySelectorAll('.card.selected')
            .forEach(c => c.classList.remove('selected'));
    selectedItinerary = null;
    selectedGastro    = null;
    Object.keys(selectedActs).forEach(k => delete selectedActs[k]);
    selectedCities.clear();
    personsInput.value = 1;
    actWrapper.innerHTML = '';
    loadCityActivities(citySelect.value);

  }

  // ─── 12. Modal principal ────────────────────────────────────────────
  const openBtn = document.getElementById('openReserve');
  const dlgMain = document.getElementById('reserveModal');
  const closeBtn= dlgMain.querySelector('.modal-close');
  const dlgCart = document.getElementById('cartModal');

  openBtn.addEventListener('click', () => dlgMain.showModal());
  closeBtn.addEventListener('click', () => {
    if (dlgCart.open) dlgCart.close();
    dlgMain.close();
  });
  dlgMain.addEventListener('cancel', e => {
    if (dlgCart.open) {
      e.preventDefault();
      dlgCart.close();
    }
  });

  // ─── 13. Render inicial ─────────────────────────────────────────────
  loadCityActivities(citySelect.value);
  updateUI();

  /* ────────────────────────────────────────────────────────────────────
     14. 🔥 Lógica extra: tarjetas de hospedaje (.lodging) opcionales
     (No altera nada del core; si existen .card.lodging se comportan
     igual que las .gastro). Si no hay ninguna, este bloque no hace nada.
     ────────────────────────────────────────────────────────────────── */
  document.querySelectorAll('.card.lodging').forEach(card => {
    if (card.dataset._lodgingInit) return;      // evita duplicar listener
    card.dataset._lodgingInit = '1';
    card.addEventListener('click', () => {
      document.querySelectorAll('.card.lodging.selected')
              .forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedGastro = {                         // reutilizamos misma var
        id:    card.dataset.id,
        price: +card.dataset.price,
        name:  card.querySelector('p').textContent
      };
      toast('Hospedaje seleccionado');
      updateUI();
    });
  });
  function showStep (n) {
    document.body.classList.remove('wizard-step-1','wizard-step-2','wizard-step-3');
    document.body.classList.add(`wizard-step-${n}`);
    currentStep = n;

    stepIndicator.querySelectorAll('li').forEach(li=>{
      li.classList.toggle('active', +li.dataset.step === n);
    });
    prevBtnPg.disabled = n === 1;
    nextBtnPg.disabled =
      (n === 1 && !selectedItinerary) ||
      (n === 2 && !selectedGastro);
      addBtn.style.display  = n === 3 ? 'inline-block' : 'none';
      nextBtn.style.display = n === 3 ? 'none'          : 'inline-block';
  }

  /* listeners de flechas */
  prevBtnPg.addEventListener('click', () => {
    if (currentStep > 1) showStep(currentStep - 1);
  });

  nextBtnPg.addEventListener('click', () => {
    if (currentStep === 1 && selectedItinerary) {
      showStep(2);
    } else if (currentStep === 2 && selectedGastro) {
      showStep(3);
    }
  });

    /* arranque */
    showStep(1);
  });

