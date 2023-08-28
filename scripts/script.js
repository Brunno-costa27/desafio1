// Selecione todos os elementos SVG pela classe
const svgElements = document.querySelectorAll(".bi");

// Função de tratamento de clique
function toggleColor(event) {
  const svgElement = event.currentTarget;
  const shapes = svgElement.querySelectorAll("path");

  shapes.forEach(shape => {

    const corAtual = shape.getAttribute("fill");
    console.log(corAtual);
    if (corAtual === "rgba(87, 74, 232)" || corAtual === null) {
      shape.setAttribute("fill", "red");
    } else {
      shape.setAttribute("fill", "rgba(87, 74, 232)");
    }
  });

}
// Remova o ouvinte de evento após o primeiro clique

// Adicione um evento de clique a cada elemento SVG
svgElements.forEach(svgElement => {
  
  svgElement.addEventListener("click", toggleColor);
});


document.addEventListener("DOMContentLoaded", function () {
  const cardItems = document.querySelectorAll(".card");
  const windowHeight = window.innerHeight;
  console.log("Altura atual da janela",windowHeight);

  function fadeInElements() {
    cardItems.forEach((card) => {
      const itemTop = card.getBoundingClientRect().top;

      if (itemTop > windowHeight) {
        card.classList.remove("card");
      } else if (itemTop < windowHeight) { 
        card.classList.add("card");
      }
    });
  }

  window.addEventListener("scroll", fadeInElements);
});