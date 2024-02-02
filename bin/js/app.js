//BARRA
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = d3.select('#toggleBtn');
    const sidebar = d3.select('.sidebar');
    const mainContent = d3.select('.main-content');
    toggleBtn.on('click', function () {
        const sidebarWidth = parseInt(sidebar.style('width'));
        if (sidebarWidth > 0) {
            sidebar.transition().style('width', '0');
            mainContent.transition().style('margin-left', '0');
            toggleBtn.html('&#9654;');
        }
        else {
            sidebar.transition().style('width', '200px');
            mainContent.transition().style('margin-left', '200px');
            toggleBtn.html('&#9664;');
        }
    });
});
// Obtener el elemento SVG
const svg = d3.select("#miSVG2");
const imageUrl = 'data:image/png;base64,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';
svg.append("image")
    .attr("href", imageUrl)
    .attr("width", 100)
    .attr("height", 100);
const circleContainer = svg.append("g");
// Variables para el arrastre
let offsetX = 0;
let offsetY = 0;
//  crear un nuevo círculo
function createCircle(cx, cy) {
    const newCircle = circleContainer.append("circle")
        .attr("cx", cx)
        .attr("cy", cy)
        .attr("r", 50)
        .attr("fill", "red")
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
// Agregar eventos de mouse para el arrastre del círculo
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
const addButton = d3.select("#addButton");
addButton.on("click", () => {
    // Crear un nuevo círculo
    createCircle(200, 200);
    console.log("botooonadd   ");
});
//# sourceMappingURL=app.js.map