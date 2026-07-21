// NEX PLAYER V5 - main.js - leve, sem loops pesados
document.addEventListener('DOMContentLoaded', () => {
  // MENU
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('sideMenu');
  const backdrop = document.getElementById('sideBackdrop');
  const close = document.getElementById('closeMenu');

  function toggleMenu(open) {
    const willOpen = open ?? !menu.classList.contains('open');
    menu.classList.toggle('open', willOpen);
    backdrop.classList.toggle('open', willOpen);
    btn.classList.toggle('active', willOpen);
    document.body.style.overflow = willOpen ? 'hidden' : '';
  }
  if (btn && menu) {
    btn.addEventListener('click', () => toggleMenu());
    close.addEventListener('click', () => toggleMenu(false));
    backdrop.addEventListener('click', () => toggleMenu(false));
  }

  // TABS CATALOGO PREVIEW - JS simples
  const tabs = document.querySelectorAll('.tab');
  const grids = document.querySelectorAll('[data-tab-grid]');
  
  tabs.forEach(t => {
    t.addEventListener('click', () => {
      const target = t.dataset.tab;
      tabs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      grids.forEach(g => {
        g.style.display = g.dataset.tabGrid === target ? 'grid' : 'none';
      });
    });
  });
});

