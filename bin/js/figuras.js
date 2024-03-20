var AppHolaMundo;
(function (AppHolaMundo) {
    class P2 {
        constructor() {
            // mapa: Map<number, CirculoMap>;
            this.id = 0;
            this.dragStart = (event, d) => {
                this.newCircle = d3.select(event.sourceEvent.target);
            };
            this.dragging = (event, d) => {
                this.newCircle.attr("cx", d.x = event.x).attr("cy", d.y = event.y);
            };
            this.dragEnd = (event, d) => {
                const circleX = +this.newCircle.attr("cx") || 0;
                const circleY = +this.newCircle.attr("cy") || 0;
                const imgBasura = d3.select("#imageB");
                const imageX = +imgBasura.attr("x") || 0;
                const imageY = +imgBasura.attr("y") || 0;
                const imageWidth = +imgBasura.attr("width") || 0;
                const imageHeight = +imgBasura.attr("height") || 0;
                if (circleX >= imageX &&
                    circleX <= imageX + imageWidth &&
                    circleY >= imageY &&
                    circleY <= imageY + imageHeight) {
                    const circleId = d.id;
                    const index = this.circleArr.findIndex(circle => circle.id === circleId);
                    if (index !== -1) {
                        this.circleArr.splice(index, 1);
                        this.dibujaCirculos();
                    }
                }
            };
            this.svgContenedor = d3.select("#svgContenedor");
            // this.mapa = new Map();
            this.circleArr = new Array();
            this.svgContenedor.append("image")
                .attr("id", "imageB")
                .attr("class", "imgBasura")
                .attr('href', 'images/traash.svg')
                .attr('width', '100')
                .attr('height', '100')
                .attr("z-index", 25);
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
                .attr('x', '170px')
                .attr('fill', 'white')
                .attr("font-family", "cursive")
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
                .attr('x', '330px')
                .attr("font-family", "cursive")
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
            let tCirculo = { id: this.id, color: newColor, radio: tRadio, x: 300 + (tRadio * 2), y: 300 };
            this.circleArr.push(tCirculo);
            this.dibujaCirculos();
            this.id++;
        }
        dibujaCirculos() {
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
            })
                .on("drag", (event, d) => {
                this.dragging(event, d);
            })
                .on("end", (event, d) => {
                this.dragEnd(event, d);
            }))
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
                })
                    .on("drag", (event, d) => {
                    this.dragging(event, d);
                })
                    .on("end", (event, d) => {
                    this.dragEnd(event, d);
                }));
                return update;
            }, exit => exit
                .transition()
                .duration(1000)
                .attr("fill", "red")
                .remove());
        }
    }
    AppHolaMundo.P2 = P2;
})(AppHolaMundo || (AppHolaMundo = {}));
