document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');
  let hoverTimeout;
  let closeTimeout;

  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('.dropbtn');
    const content = dropdown.querySelector('.dropdown-content');


    // ABRIR/CERRAR DROPDOWN AL CLICK EN EL BOTÓN
    button.addEventListener('click', function(e) {
      e.stopPropagation();
      // Cerrar otros dropdowns
      dropdowns.forEach(d => {
        if (d !== dropdown) d.classList.remove('open');
      });
	   // Smooth scroll al anchor si queremos
  const targetId = this.dataset.target; // ejemplo: data-target="#bio"
  if (targetId) {
    const target = document.querySelector(targetId);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }
      // Alternar el actual
      dropdown.classList.toggle('open');
    });

    // ABRIR AL HACER HOVER
    dropdown.addEventListener('mouseenter', function() {
      clearTimeout(closeTimeout);
      clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => {
        dropdown.classList.add('open');
        dropdowns.forEach(d => { if (d !== dropdown) d.classList.remove('open'); });
      }, 150);
    });

    // CERRAR AL SALIR
    dropdown.addEventListener('mouseleave', function(e) {
      clearTimeout(hoverTimeout);
      const isMovingToDropdown = content.contains(e.relatedTarget);
      if (!isMovingToDropdown) {
        closeTimeout = setTimeout(() => {
          dropdown.classList.remove('open');
        }, 300);
      }
    });

    // MANTENER ABIERTO SI EL CURSOR ESTÁ SOBRE EL CONTENIDO
    content.addEventListener('mouseenter', function() {
      clearTimeout(closeTimeout);
      dropdown.classList.add('open');
    });

    content.addEventListener('mouseleave', function() {
      closeTimeout = setTimeout(() => {
        dropdown.classList.remove('open');
      }, 200);
    });
  });

  // CERRAR TODOS AL CLICK FUERA
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      dropdowns.forEach(d => d.classList.remove('open'));
    }
  });

  // CERRAR AL SCROLL
  window.addEventListener('scroll', function() {
    dropdowns.forEach(d => d.classList.remove('open'));
  });

  // SMOOTH SCROLL PARA ANCHORS INTERNOS
  document.querySelectorAll('.dropdown-content a[href^="#"], a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
      // Cerrar dropdowns al navegar
      dropdowns.forEach(d => d.classList.remove('open'));
    });
  });
});