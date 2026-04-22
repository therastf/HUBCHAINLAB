const scene = document.querySelector('.scene');

// Reinicia la animación al hacer click
scene.addEventListener('click', () => {
  scene.style.display = 'none';
  void scene.offsetWidth;
  scene.style.display = 'flex';
});