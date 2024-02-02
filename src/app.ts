const svg2 = d3.select("#miSVG");

// Obtener el elemento SVG
const svg = d3.select("#miSVG");

// Crear un contenedor para los círculos
const circleContainer = svg.append("g");

// Definir las coordenadas iniciales del círculo
let startX = 25;
let startY = 0;

// Dibujar el círculo
const circle = circleContainer.append("circle")
  .attr("cx", 100)
  .attr("cy", 100)
  .attr("r", 50)
  .attr("fill", "yellow")
  .attr("cursor", "grab"); // Cambiar el cursor para indicar que el círculo es arrastrable

// Agregar eventos de mouse para el arrastre
circle.call(d3.drag()
  .on("start", dragStart)
  .on("drag", dragging)
  .on("end", dragEnd)
);

function dragStart(event: any) {
  // Guardar las coordenadas iniciales del evento
  startX = event.x;
  startY = event.y;
}

function dragging(event: any) {
  // Calcular la diferencia entre las coordenadas iniciales y las actuales del evento
  const deltaX = event.x - startX;
  const deltaY = event.y - startY;

  // Obtener las coordenadas actuales del círculo
  const currentX = +circle.attr("cx");
  const currentY = +circle.attr("cy");

  // Aplicar las nuevas coordenadas al círculo
  circle.attr("cx", currentX + deltaX)
    .attr("cy", currentY + deltaY);

  // Actualizar las coordenadas iniciales para el próximo evento
  startX = event.x;
  startY = event.y;
}

function dragEnd(event: any) {
  // Puedes agregar lógica adicional al finalizar el arrastre si es necesario
  console.log("Arrastre finalizado");
}