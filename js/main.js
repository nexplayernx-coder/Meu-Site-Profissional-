// NEX PLAYER V5.1 - FIX MENU + TABS
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('sideMenu');
  const backdrop = document.getElementById('sideBackdrop');
  const close = document.getElementById('closeMenu');

  function toggleMenu(open){
    const willOpen = open ?? !menu.classList.contains('active');
    menu.classList.toggle('active', willOpen);
    backdrop.classList.toggle('active', willOpen);
    document.body.style.overflow = willOpen ? 'hidden' : '';
  }
  if(btn && menu){
    btn.addEventListener('click', () => toggleMenu());
    if(close) close.addEventListener('click', () => toggleMenu(false));
    if(backdrop) backdrop.addEventListener('click', () => toggleMenu(false));
  }
  // TABS
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
