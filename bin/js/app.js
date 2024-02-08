document.addEventListener('DOMContentLoaded', function () {
    const body = d3.select('body');
    const CSVG = body.append('svg') //bote trash-id
        .attr('id', 'miSVG2')
        .attr('width', '1200')
        .attr('height', '1220');
    CSVG.append("image")
        .attr('href', 'images/trash.svg')
        .attr('width', '200')
        .attr('height', '200');
    const figurascontainer = CSVG.append("g");
    //para arraastre del circulo
    let offsetX = 0;
    let offsetY = 0;
    //crear figuras
    function createCircle(cx, cy) {
        const newCircle = figurascontainer.append("circle")
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("r", 50)
            .attr("fill", "green")
            .attr("cursor", "grab");
        newCircle.call(d3.drag()
            .on("start", dragStart)
            .on("drag", dragging)
            .on("end", dragEnd));
    }
    function createTriangle(x, y) {
        const newTriangle = figurascontainer.append('path')
            .attr('d', 'M ' + x + ' ' + y + ' L ' + (x + 50) + ' ' + (y + 50) + ' L ' + (x - 50) + ' ' + (y + 50) + ' Z')
            .attr('fill', 'Red')
            .attr("cursor", "grab");
        newTriangle.call(d3.drag()
            .on("start", dragStart)
            .on("drag", dragging)
            .on("end", dragEnd));
    }
    function dragStart(event) {
        const selection = d3.select(this);
        offsetX = event.x - +selection.attr("cx") || 0;
        offsetY = event.y - +selection.attr("cy") || 0;
    }
    function dragging(event) {
        const selection = d3.select(this);
        const newX = Math.max(50, Math.min(event.x - offsetX, 1150));
        const newY = Math.max(50, Math.min(event.y - offsetY, 1170));
        selection.attr("cx", newX).attr("cy", newY);
    }
    function dragEnd(event) {
        const selection = d3.select(this);
        const funX = +selection.attr("cx") || 0;
        const funY = +selection.attr("cy") || 0;
        const image = d3.select("image");
        const imageX = +image.attr("x") || 0;
        const imageY = +image.attr("y") || 0;
        const imageWidth = +image.attr("width") || 0;
        const imageHeight = +image.attr("height") || 0;
        if (funX >= imageX &&
            funX <= imageX + imageWidth &&
            funY >= imageY &&
            funY <= imageY + imageHeight) {
            selection.transition()
                .duration(500)
                .attr("r", 0)
                .attr("fill", "transparent");
            setTimeout(() => {
                selection.remove();
            }, 500);
        }
    }
    //botones generar figs
    const buttonCirculo = body.append('button').text('Add circle')
        .style('position', 'fixed')
        .style('top', '20px')
        .style('left', '20px');
    buttonCirculo.on('click', () => {
        createCircle(500, 500);
    });
    const buttonTriangle = body.append('button').text('Add triangle')
        .style('position', 'fixed')
        .style('top', '20px')
        .style('left', '120px');
    buttonTriangle.on('click', () => {
        createTriangle(500, 500);
    });
});
//# sourceMappingURL=app.js.map