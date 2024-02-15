var AppHolaMundo;
(function (AppHolaMundo) {
    class P2 {
        constructor() {
            this.circles = [];
            this.offsetX = 0;
            this.offsetY = 0;
            this.svgContenedor = d3.select("#svgContenedor");
            const body = d3.select("body");
            this.svgContenedor = body.append('svg')
                .attr("id", "svgContenedor")
                .style('display', 'block')
                .attr('width', '1800')
                .attr('height', '795')
                .style('background-color', "white")
                .style('position', "absolute")
                .style('left', "100px")
                .style('top', "100px");
            this.svgContenedor.append("image")
                .attr('href', 'images/traash.svg')
                .attr('width', '100')
                .attr('height', '100');
            var g = this.svgContenedor.append("g");
            g.append("rect")
                .style('x', '150')
                .style('y', '30')
                .style('rx', '20')
                .style('ry', '20')
                .style('fill', 'red')
                .style('position', 'absolute')
                .style('width', '120px') //tamaños de el rec
                .style('height', '40px')
                .style('cursor', 'pointer')
                .on('click', () => {
                this.createCircle();
            });
            g.append("text")
                .attr('y', '50px')
                .attr('x', '175px')
                .attr('fill', 'white')
                .text('Add Circle');
        }
        createCircle() {
            const cx = 300;
            const cy = 300;
            const colors = d3.interpolate("blue", "Red");
            const newColor = colors(Math.random());
            const newCircle = this.svgContenedor.append("circle")
                .attr("cx", cx)
                .attr("cy", cy)
                .attr("r", 50)
                .attr("cursor", "grab")
                .attr("fill", newColor);
            this.circles.push(newCircle);
            const dragStart = (event) => {
                this.offsetX = event.x - +newCircle.attr("cx") || 1000;
                this.offsetY = event.y - +newCircle.attr("cy") || 1000;
            };
            const dragging = (event) => {
                const newX = Math.max(0, Math.min(event.x - this.offsetX, 1700));
                const newY = Math.max(0, Math.min(event.y - this.offsetY, 700));
                newCircle.attr("cx", newX).attr("cy", newY);
            };
            const dragEnd = (event) => {
                const circleX = +newCircle.attr("cx") || 0;
                const circleY = +newCircle.attr("cy") || 0;
                const image = d3.select("image");
                const imageX = +image.attr("x") || 0;
                const imageY = +image.attr("y") || 0;
                const imageWidth = +image.attr("width") || 0;
                const imageHeight = +image.attr("height") || 0;
                if (circleX >= imageX &&
                    circleX <= imageX + imageWidth &&
                    circleY >= imageY &&
                    circleY <= imageY + imageHeight) {
                    newCircle.transition()
                        .duration(1000)
                        .attr("r", 0)
                        .attr("fill", "red")
                        .remove();
                    console.log("se ha eliminado");
                }
            };
            newCircle.call(d3.drag()
                .on("start", dragStart)
                .on("drag", dragging)
                .on("end", dragEnd));
        }
    }
    AppHolaMundo.P2 = P2;
})(AppHolaMundo || (AppHolaMundo = {}));
var _app = new AppHolaMundo.P1();
//# sourceMappingURL=figuras.js.map