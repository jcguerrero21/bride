// Reveal on scroll (IntersectionObserver)
(function(){
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100','translate-y-0');
        entry.target.classList.remove('opacity-0','translate-y-10');
      }
    });
  }, observerOptions);
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('transition-all','duration-700','opacity-0','translate-y-10');
    observer.observe(section);
  });
})();

// Countdown
(function(){
  const fechaBoda = new Date("2026-09-26T00:00:00").getTime();
  function actualizarContador() {
    const ahora = new Date().getTime();
    const distancia = fechaBoda - ahora;
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    const formatoDosDigitos = (num) => num < 10 ? '0' + num : num;
    document.getElementById("dias").innerText = formatoDosDigitos(dias);
    document.getElementById("horas").innerText = formatoDosDigitos(horas);
    document.getElementById("minutos").innerText = formatoDosDigitos(minutos);
    document.getElementById("segundos").innerText = formatoDosDigitos(segundos);
    if (distancia < 0) {
      clearInterval(intervalo);
      const cont = document.querySelector(".contador-boda");
      if (cont) cont.innerHTML = "<p class='text-xl tracking-[0.2em] uppercase'>¡Hoy es el gran día!</p>";
    }
  }
  const intervalo = setInterval(actualizarContador, 1000);
  actualizarContador();
})();

// Force page to top on load/refresh
(function(){
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.addEventListener('beforeunload', () => { window.scrollTo(0,0); });
  window.addEventListener('load', () => { window.scrollTo({ top:0, left:0, behavior:'instant' }); });
})();

// Burger menu toggle
(function () {
  const btn = document.getElementById('burgerBtn');
  const overlay = document.getElementById('menuOverlay');
  const close = document.getElementById('closeMenu');
  if (!btn || !overlay) return;
  function openMenu() { overlay.classList.add('open'); overlay.setAttribute('aria-hidden','false'); btn.classList.add('open'); }
  function closeMenu() { overlay.classList.remove('open'); overlay.setAttribute('aria-hidden','true'); btn.classList.remove('open'); }
  btn.addEventListener('click', () => { if (overlay.classList.contains('open')) closeMenu(); else openMenu(); });
  if (close) close.addEventListener('click', (e) => { e.preventDefault(); closeMenu(); });
  // close when clicking links inside the overlay (skip external/new-tab links)
  overlay.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href') || '';
      const target = a.getAttribute('target');
      const isExternal = /^https?:\/\//i.test(href);
      if (isExternal || target === '_blank') return; // don't auto-close for external/new-tab links
      // allow normal navigation but close overlay first
      closeMenu();
    });
  });
  // close on Escape
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
})();

// Header scrolled shadow
(function(){
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) return;
    if (window.scrollY > 50) header.classList.add('scrolled-header'); else header.classList.remove('scrolled-header');
  });
})();

// Optional gentle parallax for elements with .scrolling-bg
(function(){
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.scrolling-bg');
    if (heroBg) {
      // keep transform small and safe
      heroBg.style.transform = `translateY(${scrolled * 0.05}px) scale(1.03)`;
    }
  });
})();
