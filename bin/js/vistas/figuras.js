var AppHolaMundo;
(function (AppHolaMundo) {
    class P2 {
        constructor() {
            this.offsetX = 0;
            this.offsetY = 0;
            this.idC = 0;
            this.circleArr = [];
            this.svgContenedor = d3.select("#svgContenedor");
            this.mapa = new Map();
            this.circleArr = new Array();
            this.svgContenedor.append("image")
                .attr('href', 'images/traash.svg')
                .attr('width', '100')
                .attr('height', '100');
            var g = this.svgContenedor.append("g")
                .on('click', () => {
                this.createCircle();
            });
            g.append("rect")
                .attr("stroke", "black")
                .attr("stroke-width", "2px")
                .style('x', '150')
                .style('y', '30')
                .style('rx', '20')
                .style('ry', '20')
                .style('fill', 'Green   ')
                .style('position', 'absolute')
                .style('width', '120px')
                .style('height', '40px')
                .style('cursor', 'pointer');
            var g9 = this.svgContenedor.append("g");
            g9.append("text")
                .attr('y', '55px')
                .attr('x', '175px')
                .attr('fill', 'white')
                .style('pointer-events', 'none')
                .text('Add Circle');
            g9.append("rect")
                .attr("stroke", "black")
                .attr("stroke-width", "2px")
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
            //array datos
            //mapa datos
            this.mapa.set(0, { id: 0, color: "red" });
            this.mapa.set(1, { id: 1, color: "blue" });
            this.mapa.set(2, { id: 2, color: "green" });
            this.mapa.set(3, { id: 3, color: "grey" });
            this.mapa.set(4, { id: 4, color: "pink" });
            //console.log(this.mapa.get(3));
            this.circleArr.push({ id: 0, color: "orange" });
            this.circleArr.push({ id: 1, color: "yellow" });
            this.circleArr.push({ id: 2, color: "white" });
            this.circleArr.push({ id: 3, color: "purple" });
            this.circleArr.push({ id: 4, color: "gold" });
            console.log(this.circleArr.find);
        }
        // arrayejemplo(data, Circulo) {
        //     var ejm1: Array<Circulo> = Array.from(this.circleArr.values());
        // }
        mapacircle(data) {
            var mapa = Array.from(this.mapa.values());
            const svg = this.svgContenedor;
            const colors = d3.interpolate("blue", "Red");
            const newColor = colors(Math.random());
            const cx = 500;
            const cy = 300;
            const d = svg.selectAll("circle")
                .data(mapa, d => 1)
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
                    .attr("stroke", "black")
                    .attr("stroke-width", "4px");
            })
                .on("mouseleave", function (d, event) {
                d3.select(this)
                    .attr("fill", newColor)
                    .attr("stroke", "none");
            }), update => update
                .on("click", () => {
                update;
                console.log("Se hizo clic en el botón");
            }), exit => exit
                .remove());
        }
        createCircle() {
            const nCircle = this.mapa.get(0);
            this.circleArr.push(nCircle);
            this.mapacircle(this.circleArr);
            this.idC++;
            //     this.mapa.set(nuevoCirculo.id, nuevoCirculo);
            // let saveE: CirculoMap = this.mapa.get(4); //tipar dato 
            // console.log(saveE.id)
            // this.circleArr.push(nuevoCirculo);//se agrega
            // this.mapacircle(this.circleArr);
            // this.idC++;
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
