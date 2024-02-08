// Me falta aun solo pasar unas funciones de html a type 
class MiClase {
    constructor() {
        console.log('Se ha creado un constructor');
    }
    metodo() {
        console.log('Imprime metodo');
    }
}
// Crear una instancia de la clase y llamar a un método
const instancia = new MiClase();
instancia.metodo();
const svgstar = d3.select('star');
const body2 = d3.select('star');
const button2 = body2.append('button2').text('Add Star');
//Esta en proceso esta parte
const svg = d3.select("#miSVG2");
//crear el circulo con d3
const body = d3.select('body');
const button = body.append('button').text('Add circle')
    .style('position', 'fixed')
    .style('top', '20px')
    .style('left', '20px');
button.on('click', () => {
    createCircle(400, 400);
    console.log("si se añadio");
});
svg.append("image")
    .attr('href', 'images/trash.svg') //Es la ruta del archivo local que se manda a llamar
    .attr('width', '350')
    .attr('height', '350');
const circleContainer = svg.append("g");
// Variables para que se mueva (arraastre)
let offsetX = 0;
let offsetY = 0;
//  crear un nuevo círculo
function createCircle(cx, cy) {
    const newCircle = circleContainer.append("circle")
        .attr("cx", cx)
        .attr("cy", cy)
        .attr("r", 50)
        .attr("fill", "green") //color del circulo
        .attr("cursor", "grab");
    newCircle.call(d3.drag()
        .on("start", dragStart)
        .on("drag", dragging)
        .on("end", dragEnd));
}
function handleClick() {
    // Aplicar la transición al círculo
    d3.select(this)
        .transition()
        .duration(1000)
        .attr("r", 20)
        .attr("fill", "yellow");
}
//Agregar eventos de mouse para el arrastre del círculo
function dragStart(event) {
    offsetX = event.x - +d3.select(this).attr("cx");
    offsetY = event.y - +d3.select(this).attr("cy");
}
function dragging(event) {
    const newX = event.x - offsetX;
    const newY = event.y - offsetY;
    d3.select(this)
        .attr("cx", newX)
        .attr("cy", newY);
}
function dragEnd(event) {
    const circle = d3.select(this);
    const circleX = +circle.attr("cx");
    const circleY = +circle.attr("cy");
    const image = d3.select("image");
    const imageX = +image.attr("x");
    const imageY = +image.attr("y");
    const imageWidth = +image.attr("width");
    const imageHeight = +image.attr("height");
    if (circleX >= imageX &&
        circleX <= imageX + imageWidth &&
        circleY >= imageY &&
        circleY <= imageY + imageHeight) {
        // pa aplicarlo se debe considerar sus propiedades para quele den estilo
        circle.transition()
            .duration(500)
            .attr("r", 0)
            .attr("fill", "transparent");
        setTimeout(() => {
            circle.remove();
        }, 500);
    }
}
//# sourceMappingURL=app.js.map