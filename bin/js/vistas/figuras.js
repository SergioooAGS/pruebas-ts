var AppHolaMundo;
(function (AppHolaMundo) {
    class P2 {
        constructor() {
            this.offsetX = 0;
            this.offsetY = 0;
            this.circulos = [];
            this.svgContenedor = d3.select("#svgContenedor");
            this.newCircle = this.svgContenedor.append("circle")
                // .attr("fill", "blue")
                // .attr("r", 10)
                .call(d3.drag()
                .on("start", (event) => this.dragStart(event))
                .on("drag", (event) => this.dragging(event))
                .on("end", () => this.dragEnd()));
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
                .style('cursor', 'pointer');
            g.append("text")
                .attr('y', '55px')
                .attr('x', '175px')
                .attr('fill', 'white')
                .style('pointer-events', 'none')
                .text('Add Circle');
            const mapaSi = new Map();
            mapaSi.set('01', { nombre: 'circulo', color: "red" });
            mapaSi.set('02', { nombre: 'Limon', color: "green" });
            mapaSi.set('03', { nombre: 'Estambre', color: "blue" });
            mapaSi.set('04', { nombre: 'Luna', color: "yellow" });
            mapaSi.set('05', { nombre: 'Queso', color: "white" });
            console.log(mapaSi.get("03"));
            console.log(mapaSi.get("02"));
        }
        mapacircle(data) {
            const svg = this.svgContenedor;
            const cx = 500;
            const cy = 300;
            const circles = svg.selectAll("circle")
                .data(data, d => 2)
                .join(enter => enter.append("circle")
                .attr("fill", d => d.color)
                .attr("r", 50)
                .attr("cx", cx)
                .attr("cy", cy)
                .attr("cursor", "grab"), update => update, exit => {
                return exit.remove();
            });
        }
        createCircle() {
            const nuevoCirculo = {
                id: Math.random(),
                color: "red"
            };
            this.circulos.push(nuevoCirculo);
            this.mapacircle(this.circulos);
        }
        dragStart(event) {
            this.offsetX = event.x - +this.newCircle.attr("cx") || 0;
            this.offsetY = event.y - +this.newCircle.attr("cy") || 0;
        }
        dragging(event) {
            const newX = Math.max(50, Math.min(event.x - this.offsetX, 1700));
            const newY = Math.max(50, Math.min(event.y - this.offsetY, 700));
            this.newCircle.attr("cx", newX).attr("cy", newY);
        }
        dragEnd() {
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
                this.newCircle.transition()
                    .duration(500)
                    .attr("r", 0)
                    .attr("fill", "red")
                    .remove();
            }
        }
    }
    AppHolaMundo.P2 = P2;
})(AppHolaMundo || (AppHolaMundo = {}));
const app = new AppHolaMundo.P2();
