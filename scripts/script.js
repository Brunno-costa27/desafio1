// Selecione todos os elementos SVG pela classe
const svgElements = document.querySelectorAll(".bi");

// Função de tratamento de clique
function toggleColor(event) {
  console.log("1");
  const svgElement = event.currentTarget;
  const shapes = svgElement.querySelectorAll("path");

  shapes.forEach(shape => {
    console.log("2");

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
  console.log("3");
  
  svgElement.addEventListener("click", toggleColor);
});
