/* ============================================================
   NEXUS — Centro de Investigación IA & Blockchain
   main.js
   ============================================================ */

/* ─── PAGE NAVIGATION ─── */
function showPage(id) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target
  document.getElementById('page-' + id).classList.add('active');
  // Update nav active state
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + id);
  if (navEl) navEl.classList.add('active');
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Trigger fade-ins for new page
  setTimeout(initFadeIn, 100);
}

/* ─── SCROLL FADE-IN ─── */
function initFadeIn() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.page.active .fade-in:not(.visible)')
    .forEach(el => obs.observe(el));
}

/* ─── FILTER BUTTONS ─── */
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      // Remove active from siblings in same group
      this.closest('.sidebar-filter')
        .querySelectorAll('.filter-btn')
        .forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

/* ─── INIT ON LOAD ─── */
document.addEventListener('DOMContentLoaded', () => {
  initFadeIn();
  initFilters();
});
