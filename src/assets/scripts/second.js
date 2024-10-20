document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".info__accordion-item");
  
    accordionItems.forEach(item => {
      const title = item.querySelector(".info__accordion-title");
  
      title.addEventListener("click", function () {
        // Cierra todos los otros desplegables
        accordionItems.forEach(i => {
          if (i !== item) {
            i.classList.remove("active");
          }
        });
  
        // Alterna el estado activo del desplegable actual
        item.classList.toggle("active");
      });
    });
});
  
  document.querySelectorAll('.hero__article-text a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const cardContainer = document.querySelector('.card__container');
const cards = [...document.querySelectorAll('.card__box')];

function scrollCards() {
    cards.forEach((card, i) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Si la parte superior de la carta está dentro de la ventana del navegador
        if (cardTop < windowHeight && cardTop > 0) {
            const offset = (cardTop / windowHeight) * 0.3;
            card.style.transform = `scale(${1 + offset})`;
        } else {
            card.style.transform = 'scale(1)'; // Resetear la escala cuando la tarjeta sale de la vista
        }
    });
}

window.addEventListener('scroll', scrollCards);
