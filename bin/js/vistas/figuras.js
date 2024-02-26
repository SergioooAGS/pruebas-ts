var AppHolaMundo;
(function (AppHolaMundo) {
    class P2 {
        constructor() {
            this.offsetX = 0;
            this.offsetY = 0;
            this.svgContenedor = d3.select("#svgContenedor");
            this.newCircle = d3.select("#newCircle");
            this.circles = d3.select("#circles");
            this.svgContenedor.append("image")
                .attr('href', 'images/traash.svg')
                .attr('width', '100')
                .attr('height', '100');
            var g = this.svgContenedor.append("g")
                .on('click', () => {
                this.createCircle();
            });
            g.append("rect")
                .style('x', '150')
                .style('y', '30')
                .style('rx', '20')
                .style('ry', '20')
                .style('fill', 'red')
                .style('position', 'absolute')
                .style('width', '120px')
                .style('height', '40px')
                .style('cursor', 'pointer')
                .style('pointer-events', 'none');
            g.append("text")
                .attr('y', '55px')
                .attr('x', '175px')
                .attr('fill', 'white')
                .text('Add Circle');
        }
        createCircle() {
            const cx = 500;
            const cy = 300;
            const colors = d3.interpolate("blue", "Red");
            const newColor = colors(Math.random());
            this.newCircle = this.svgContenedor.append("circle")
                .attr("cx", cx)
                .attr("cy", cy)
                .attr("r", 50)
                .attr("cursor", "grab")
                .attr("fill", newColor)
                .call(d3.drag()
                .on("start", this.dragStart.bind(this))
                .on("drag", this.dragging.bind(this))
                .on("end", this.dragEnd.bind(this)));
            this.newCircle.attr("cx", cx).attr("cy", cy);
            this.circles = this.newCircle;
        }
        dragStart(event) {
            this.offsetX = event.x - +this.newCircle.attr("cx") || 0;
            this.offsetY = event.y - +this.newCircle.attr("cy") || 0;
        }
        dragging(event) {
            const newX = Math.max(50, Math.min(event.x - this.offsetX, 1700));
            const newY = Math.max(50, Math.min(event.y - this.offsetY, 700));
            this.newCircle.attr("cx", newX).attr("cy", newY);
            console.log("sillego");
        }
        dragEnd(event) {
            const circleX = +this.newCircle.attr("cx") || 0;
            const circleY = +this.newCircle.attr("cy") || 0;
            const image = d3.select("image");
            const imageX = +image.attr("x") || 0;
            const imageY = +image.attr("y") || 0;
            const imageWidth = +image.attr("width") || 0;
            const imageHeight = +image.attr("height") || 0;
            if (circleX >= imageX &&
                circleX <= imageX + imageWidth &&
                circleY >= imageY &&
                circleY <= imageY + imageHeight) {
                this.circles.transition()
                    .duration(500)
                    .attr("r", 0)
                    .attr("fill", "red")
                    .remove();
                console.log("notebas");
            }
        }
    }
    AppHolaMundo.P2 = P2;
})(AppHolaMundo || (AppHolaMundo = {}));
var _app = new AppHolaMundo.P1();