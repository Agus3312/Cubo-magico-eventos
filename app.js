// Base de datos de promociones por mes
const PROMOS = {
  julio: {
    folder: "Promos Julio2026",
    files: [
      "WhatsApp Image 2026-07-06 at 15.44.46.jpeg",
      "WhatsApp Image 2026-07-06 at 15.44.47.jpeg",
      "WhatsApp Image 2026-07-06 at 15.44.48.jpeg",
      "WhatsApp Image 2026-07-06 at 15.44.49.jpeg",
      "WhatsApp Image 2026-07-06 at 15.44.50.jpeg",
      "WhatsApp Image 2026-07-06 at 15.44.53 (1).jpeg",
      "WhatsApp Image 2026-07-06 at 15.44.53.jpeg"
    ]
  },
  agosto: {
    folder: "Promos Agosto 2026",
    files: [
      "WhatsApp Image 2026-07-06 at 15.45.23.jpeg",
      "WhatsApp Image 2026-07-06 at 15.45.24.jpeg",
      "WhatsApp Image 2026-07-06 at 15.45.25.jpeg",
      "WhatsApp Image 2026-07-06 at 15.45.26.jpeg",
      "WhatsApp Image 2026-07-06 at 15.45.27 (1).jpeg",
      "WhatsApp Image 2026-07-06 at 15.45.27.jpeg",
      "WhatsApp Image 2026-07-06 at 15.45.28.jpeg"
    ]
  },
  septiembre: {
    folder: "Promos Septiembre 2026",
    files: [
      "WhatsApp Image 2026-07-06 at 15.45.28.jpeg",
      "WhatsApp Image 2026-07-06 at 15.45.29 (1).jpeg",
      "WhatsApp Image 2026-07-06 at 15.45.30 (1).jpeg",
      "WhatsApp Image 2026-07-06 at 15.45.30.jpeg",
      "WhatsApp Image 2026-07-06 at 15.45.31 (1).jpeg",
      "WhatsApp Image 2026-07-06 at 15.45.31.jpeg"
    ]
  }
};

function loadPromos(month) {
  const slider = document.getElementById('promo-slider');
  slider.innerHTML = '';
  const data = PROMOS[month];
  
  data.files.forEach(file => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.innerHTML = `<img src="${data.folder}/${file}" alt="Promo ${month}" onclick="openLightbox(this.src)" style="cursor:zoom-in;">`;
    slider.appendChild(slide);
  });
}

// Event listeners para las pestañas de promociones
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    loadPromos(btn.getAttribute('data-month'));
  });
});

// Carga inicial (Julio por defecto)
loadPromos('julio');

function openLightbox(src){
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('active');
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('active');
}

const faqs = [
  ["¿Puedo llevar mi propia comida?", "Sí, podés traer tu propia comida y bebida. También ofrecemos opciones con catering incluido para niños."],
  ["¿Se puede contratar catering?", "Sí, tenemos opciones de catering para niños (panchos, gaseosas y jugos) que podés sumar a cualquier promo."],
  ["¿Cuántos invitados incluye?", "Nuestras promos incluyen hasta 25 niños and 25 adultos. Consultanos si tu evento es más grande."],
  ["¿Hay estacionamiento?", "Consultanos por WhatsApp y te contamos las opciones de estacionamiento cerca del salón."],
  ["¿Qué pasa si llueve?", "No hay problema: el salón es cubierto, así que la fiesta sigue como estaba planeada."],
  ["¿Cómo reservo?", "Escribinos por WhatsApp con la fecha, cantidad de niños y adultos, y te confirmamos disponibilidad al instante."],
  ["¿La seña se devuelve?", "La seña reserva tu fecha y se descuenta del total del evento. Para cambios de fecha, consultanos por WhatsApp."],
];

const list = document.getElementById('faq-list');
faqs.forEach(([q,a])=>{
  const item = document.createElement('div');
  item.className = 'faq-item';
  item.innerHTML = `<div class="faq-q">${q}<span class="plus">+</span></div><div class="faq-a">${a}</div>`;
  item.querySelector('.faq-q').addEventListener('click', ()=> item.classList.toggle('open'));
  list.appendChild(item);
});
