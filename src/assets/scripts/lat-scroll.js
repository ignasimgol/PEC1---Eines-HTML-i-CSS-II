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



