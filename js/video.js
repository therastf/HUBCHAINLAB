const videos = document.querySelectorAll(".video");
let index = 0;

function cambiarVideo() {
  videos[index].classList.remove("active");

  index = (index + 1) % videos.length;

  videos[index].classList.add("active");
}

// Cambia cada 8 segundos
setInterval(cambiarVideo, 8000);