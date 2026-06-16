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

// Countdown (only run on pages that include countdown elements)
(function(){
  const diasEl = document.getElementById("dias");
  const horasEl = document.getElementById("horas");
  const minutosEl = document.getElementById("minutos");
  const segundosEl = document.getElementById("segundos");
  if (!diasEl || !horasEl || !minutosEl || !segundosEl) return;
  const fechaBoda = new Date("2026-09-26T00:00:00").getTime();
  function actualizarContador() {
    const ahora = new Date().getTime();
    const distancia = fechaBoda - ahora;
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    const formatoDosDigitos = (num) => num < 10 ? '0' + num : num;
    diasEl.innerText = formatoDosDigitos(dias);
    horasEl.innerText = formatoDosDigitos(horas);
    minutosEl.innerText = formatoDosDigitos(minutos);
    segundosEl.innerText = formatoDosDigitos(segundos);
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
  window.addEventListener('load', () => {
    // If the URL contains a hash (e.g. index.html#ayudanos) respect it and scroll to that element.
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        // use instant to mimic normal anchor navigation, but give browser a tick
        setTimeout(() => el.scrollIntoView({ behavior: 'instant' in Element.prototype ? 'instant' : 'auto' }), 10);
        return;
      }
    }
    window.scrollTo({ top:0, left:0, behavior:'instant' });
  });
})();

// Burger menu toggle
(function () {
  const btn = document.getElementById('burgerBtn');
  const overlay = document.getElementById('menuOverlay');
  if (!btn || !overlay) return;
  // DEBUG flag (false for normal behavior)
  window.__MENU_DEBUG = false;
  // manage backdrop element so menu overlays all page content
  let backdrop = null;
  function createBackdrop() {
    if (backdrop) return backdrop;
    backdrop = document.createElement('div');
    backdrop.className = 'menu-backdrop';
    backdrop.addEventListener('click', closeMenu);
    return backdrop;
  }
  function openMenu() {
    document.body.appendChild(createBackdrop());
    overlay.classList.add('open'); overlay.setAttribute('aria-hidden','false'); btn.classList.add('open');
    // prevent body scroll like el_tinglao
    document.body.classList.add('menu-open');
  }
  function closeMenu() {
    overlay.classList.remove('open'); overlay.setAttribute('aria-hidden','true'); btn.classList.remove('open');
    document.body.classList.remove('menu-open');
    if (backdrop && backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
    backdrop = null;
  }
  btn.addEventListener('click', () => { if (overlay.classList.contains('open')) closeMenu(); else openMenu(); });
  // no separate close button: the burger button toggles the menu and transforms to X
  // close when clicking links inside the overlay (skip external/new-tab links)
  overlay.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href') || '';
      const target = a.getAttribute('target');
      const isExternal = /^https?:\/\//i.test(href);
      console.log('[menu] click on', { href, target, isExternal, id: a.id, text: a.textContent && a.textContent.trim() });
      if (isExternal || target === '_blank') return; // don't auto-close for external/new-tab links
      // If debug mode is on, prevent navigation so console is preserved
      // allow normal navigation but close overlay first
      closeMenu();
      // small delay to let the close animation start (does not block navigation)
      setTimeout(() => console.log('[menu] after close, allowing navigation to', href), 120);
    });
  });
  // close on Escape
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
})();

// Header scrolled shadow
// (function(){
//   window.addEventListener('scroll', () => {
//     const header = document.querySelector('header');
//     if (!header) return;
//     if (window.scrollY > 50) header.classList.add('scrolled-header'); else header.classList.remove('scrolled-header');
//   });
// })();

// Optional gentle parallax for elements with .scrolling-bg
// (function(){
//   window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const heroBg = document.querySelector('.scrolling-bg');
//     if (heroBg) {
//       // keep transform small and safe
//       heroBg.style.transform = `translateY(${scrolled * 0.05}px) scale(1.03)`;
//     }
//   });
// })();
