  document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("intro-loader");
    document.body.classList.add("preload");

    setTimeout(() => {
      loader.classList.add("hide");
      document.body.classList.remove("preload");

      setTimeout(() => {
        loader.remove();
      }, 800);
    }, 4200); 
  });
