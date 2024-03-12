var AppHolaMundo;
(function (AppHolaMundo) {
    // export interface CirculoMap {
    //     id: number;
    //     color: any;
    // }
    class P2 {
        constructor() {
            this.offsetX = 0;
            this.offsetY = 0;
            // mapa: Map<number, CirculoMap>;
            this.id = 0;
            this.circleArr = [];
            this.dragStart = (event, d) => {
                this.newCircle = d3.select(event.sourceEvent.target);
                //console.log(this.newCircle)
            };
            this.dragging = (event, d) => {
                const newX = Math.max(50, Math.min(event.x - this.offsetX, 1700));
                const newY = Math.max(50, Math.min(event.y - this.offsetY, 700));
                this.newCircle.attr("cx", d.x = event.x).attr("cy", d.y = event.y);
            };
            this.dragEnd = (event, d) => {
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
                        .attr("r", 50)
                        .attr("fill", "orange")
                        .remove();
                }
            };
            this.svgContenedor = d3.select("#svgContenedor");
            // this.mapa = new Map();
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
            g.append("text")
                .attr('y', '55px')
                .attr('x', '175px')
                .attr('fill', 'white')
                .style('pointer-events', 'none')
                .text('Add Circle');
            var g9 = this.svgContenedor.append("g");
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
        }
        createCircle() {
            const colors = d3.interpolate("blue", "red");
            const newColor = colors(Math.random());
            let tRadio = 10;
            if (this.id > 0) {
                tRadio = this.id * 10;
            }
            let tCirculo;
            tCirculo = { id: this.id, color: newColor, radio: tRadio, x: 300, y: 300 };
            this.circleArr.push(tCirculo);
            this.dibujaCirculos();
            this.id++;
        }
        dibujaCirculos() {
            this.circleArr.values();
            const circle = this.svgContenedor.selectAll("circle")
                .data(this.circleArr, d => this.id)
                .join(enter => enter.append("circle")
                .attr("id", d => d.id)
                .attr("fill", d => d.color)
                .attr("r", d => d.radio)
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
                .attr("cursor", "grab")
                .call(d3.drag()
                .on("start", (event, d) => {
                this.dragStart(event, d);
                console.log(event);
            })
                .on("drag", (event, d) => {
                this.dragging(event, d);
            })
                .on("end", this.dragEnd.bind(this)))
                .on("stroke", this.dragEnd)
                .on("mouseenter", function () {
                d3.select(this)
                    .attr("stroke", "black")
                    .attr("stroke-width", "4px");
            })
                .on("mouseleave", function () {
                d3.select(this)
                    .attr("stroke", "none");
            }), update => {
                update
                    .call(d3.drag()
                    .on("start", (event, d) => {
                    this.dragStart(event, d);
                    //console.log(event);
                })
                    .on("drag", (event, d) => {
                    this.dragging(event, d);
                })
                    .on("end", this.dragEnd.bind(this)))
                    .on("stroke", this.dragEnd)
                    .on("mouseenter", function () {
                    d3.select(this)
                        .attr("stroke", "black")
                        .attr("stroke-width", "4px");
                })
                    .on("mouseleave", function () {
                    d3.select(this)
                        .attr("stroke", "none");
                });
                return update;
            }, exit => exit
                .transition()
                .duration(500)
                .attr("r", 0)
                .attr("fill", "blue")
                .remove());
        }
    }
    AppHolaMundo.P2 = P2;
})(AppHolaMundo || (AppHolaMundo = {}));
const app = new AppHolaMundo.P1();
