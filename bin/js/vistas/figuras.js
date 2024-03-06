var AppHolaMundo;
(function (AppHolaMundo) {
    class P2 {
        constructor() {
            this.offsetX = 0;
            this.offsetY = 0;
            this.circulos = [];
            this.idCircle = 0;
            this.svgContenedor = d3.select("#svgContenedor");
            this.mapa = new Map();
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
            var g9 = this.svgContenedor.append("g")
                .on('click', () => {
                //this.();
            });
            g9.append("text")
                .attr('y', '55px')
                .attr('x', '175px')
                .attr('fill', 'white')
                .style('pointer-events', 'none')
                .text('Add Circle');
            g9.append("rect")
                .style('x', '300')
                .style('y', '30')
                .style('rx', '20')
                .style('ry', '20')
                .style('fill', 'orange')
                .style('position', 'absolute')
                .style('width', '120px')
                .style('height', '40px')
                .style('cursor', 'pointer');
            g9.append("text")
                .attr('y', '55px')
                .attr('x', '335px')
                .attr('fill', 'white')
                .style('pointer-events', 'none')
                .text('Update');
            const dic = {};
            dic["01"] = { id: 1, color: "red" };
            dic["02"] = { id: 2, color: "blue" };
            dic["03"] = { id: 3, color: "green" };
            dic["04"] = { id: 4, color: "white" };
            dic["05"] = { id: 5, color: "yellow" };
        }
        mapacircle(data) {
            let aa = "sero";
            var mapaa = Array.from(this.mapa.values());
            const svg = this.svgContenedor;
            const colors = d3.interpolate("blue", "Red");
            const newColor = colors(Math.random());
            const cx = 500;
            const cy = 300;
            const circles = svg.selectAll("circle")
                .data(mapaa, d => 1)
                .join(enter => enter.append("circle")
                .attr("id", d => "circle" + d.id)
                .attr("fill", newColor)
                .attr("r", 50)
                .attr("cx", cx)
                .attr("cy", cy)
                .attr("cursor", "grab")
                .call(d3.drag()
                .on("start", this.dragStart.bind(this))
                .on("drag", this.dragging.bind(this))
                .on("end", this.dragEnd.bind(this)))
                .on("stroke", this.dragEnd)
                .on("mouseenter", function (event, d) {
                d3.select(this)
                    .attr("stroke", "white")
                    .attr("stroke-width", "3px");
            })
                .on("mouseleave", function (d, event) {
                d3.select(this)
                    .attr("fill", newColor)
                    .attr("stroke", "none");
            }), update => update
                .style("fill", "gree"), exit => exit
                .remove());
        }
        createCircle() {
            const nuevoCirculo = {
                id: this.idCircle,
                color: "red"
            };
            this.mapa.set(nuevoCirculo.id, nuevoCirculo);
            this.circulos.push(nuevoCirculo);
            this.mapacircle(this.circulos);
            this.idCircle++;
        }
        dragStart(event) {
            this.newCircle = d3.select("circle");
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
                    .attr("r", 10)
                    .attr("fill", "red")
                    .remove();
            }
        }
    }
    AppHolaMundo.P2 = P2;
})(AppHolaMundo || (AppHolaMundo = {}));
const app = new AppHolaMundo.P2();
