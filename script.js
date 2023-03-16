// Script animar info personal

const box = document.querySelector('.box-animado');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      entry.target.style.animation = 'none';
      setTimeout(() => {
        entry.target.style.animation = 'slide-in 1s ease forwards';
      }, 50);
    } else {
      entry.target.classList.remove('animated');
    }
  });
};

const observer = new IntersectionObserver(callback, options);
observer.observe(box);

// Script mostrar seccion testimonios

var toggleBtn = document.getElementById("btn-toggle");
var seccion = document.getElementById("mis-testimonios");

toggleBtn.addEventListener("click", function() {
  if (seccion.style.display === "none") {
    seccion.style.display = "block";
  } else {
    seccion.style.display = "none";
  }
});