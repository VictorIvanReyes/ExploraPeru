const LS_KEY  = 'globalCart';
const pedidos = JSON.parse(localStorage.getItem(LS_KEY) || '[]');

const tbody    = document.querySelector('#cartTable tbody');
let   subtotal = 0;

/* ––– Render filas ––– */
pedidos.forEach((p, i) => {
  /* Fila principal */
    const unitPrice = (p.total / p.persons).toFixed(2);   // S/ por persona

    const main = document.createElement('tr');
    main.innerHTML = `
    <td><img src="/assets/Departamentos/${(p.dept||'default').toLowerCase()}.jpg" alt=""><strong> ${p.dept}</strong></td>

    <td>
    <button class="btn-view"
        aria-label="Ver detalles"
        aria-expanded="false"
        data-i="${i}">
        <em> Ver datalles </em>
        <svg viewBox="0 0 20 20">
            <path d="M10 3C4 3 1 10 1 10s3 7 9 7 9-7 9-7-3-7-9-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
        </svg>
        </button>
    </td>

    <td><em>${p.persons} persona${p.persons>1?'s':''}</em></td>                 <!-- Cantidad -->
    <td>S/ ${unitPrice}</td>              <!-- Precio unitario -->
    <td>S/ ${p.total}</td>                <!-- Total -->
    `;
    tbody.appendChild(main);


  /* Fila detalle (oculta) */
  const detail = document.createElement('tr');
  detail.className = 'hidden';
  detail.innerHTML = `
    <td></td>
    <td colspan="5">
        <div class="accordion">
        <ul>
            <li><span> Ciudades:</span><span>${p.cities.join(', ') || '—'}</span></li>
            ${p.items.map(it=>`
            <li><span>${it.label}</span><span>S/ ${it.price}</span></li>
            `).join('')}
        </ul>
        </div>
    </td>`;

  tbody.appendChild(detail);

  subtotal += p.total;

  
});
/* — Toggle detalle — */
tbody.addEventListener('click', e => {
  const btn = e.target.closest('.btn-view');
  if (!btn) return;                         // no se pulsó el ojo

  /* referencias */
  const filaDetalle = btn.closest('tr').nextElementSibling;
  const acc         = filaDetalle.querySelector('.accordion');
  const expanded    = btn.getAttribute('aria-expanded') === 'true';

  /* abrir */
  if (!expanded) {
    filaDetalle.classList.remove('hidden');       // hace visible la fila
    // en el siguiente frame añadimos la clase .open → anima max-height
    requestAnimationFrame(() => acc.classList.add('open'));
  }
  /* cerrar */
  else {
    acc.classList.remove('open');                 // inicia colapso
    acc.addEventListener(
      'transitionend',
      () => filaDetalle.classList.add('hidden'),  // oculta tras animar
      { once: true }
    );
  }

  /* alternar icono / aria */
  btn.setAttribute('aria-expanded', String(!expanded));
});


/* ––– Resumen ––– */
const taxes = Math.round(subtotal * 0.05);
document.getElementById('subTotal').textContent  = `S/ ${subtotal}`;
document.getElementById('taxes').textContent     = `S/ ${taxes}`;
document.getElementById('grandTotal').textContent= `S/ ${subtotal + taxes}`;
