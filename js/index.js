
  // vincula cada botón con la flipbox indicada en data-card
  document.querySelectorAll('.flip-btn').forEach(btn=>{
    const card = document.getElementById(btn.dataset.card);
    btn.addEventListener('click', ()=> card.classList.toggle('is-flipped'));
  });
