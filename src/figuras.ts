namespace AppHolaMundo {
    export interface iCirculo {
        id: number;
        color: string;
        radio: number;
        x: number;
        y: number;
    }

    // export interface CirculoMap {
    //     id: number;
    //     color: any;

    // }

    export class P2 {
        svgContenedor: d3.Selection<SVGSVGElement, any, any, any>;
        newCircle: d3.Selection<SVGCircleElement, any, any, any>;
        // mapa: Map<number, CirculoMap>;
        id = 0;
        circleArr: iCirculo[];

        constructor() {
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

            var g9 = this.svgContenedor.append("g")

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

            let tRadio: number = 10;
            if (this.id > 0) {
                tRadio = this.id * 10;
            }
            let tCirculo: iCirculo = { id: this.id, color: newColor, radio: tRadio, x: 300 + (tRadio * 2), y: 300 };
            this.circleArr.push(tCirculo);
            this.dibujaCirculos();
            this.id++;
        }

        dibujaCirculos() {
            const circle = this.svgContenedor.selectAll("circle")
                .data(this.circleArr, d => this.id)
                .join(
                    enter => enter.append("circle")
                        .attr("id", d => d.id)
                        .attr("fill", d => d.color)
                        .attr("r", d => d.radio)
                        .attr("cx", d => d.x)
                        .attr("cy", d => d.y)
                        .attr("cursor", "grab")
                        .call(d3.drag()
                            .on("start", (event: any, d: iCirculo) => {
                                this.dragStart(event, d)
                            })
                            .on("drag", (event: any, d: iCirculo) => {
                                this.dragging(event, d)
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
                                .attr("stroke", "none")
                        }),
                    update => {
                        update
                            .call(<any>d3.drag()
                                .on("start", (event: any, d: iCirculo) => {
                                    this.dragStart(event, d)
                                })
                                .on("drag", (event: any, d: iCirculo) => {
                                    this.dragging(event, d)
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
                                    .attr("stroke", "none")
                            })
                        return update;
                    },
                    exit => exit
                        .remove()
                );
        }
        dragStart = (event: any, d: any) => {
            this.newCircle = d3.select(event.sourceEvent.target);
        }
        dragging = (event: any, d: iCirculo) => {
            this.newCircle.attr("cx", d.x = event.x).attr("cy", d.y = event.y);
        }
        dragEnd = (event: any, d: any) => {
            const circleId = d.id;
            const index = this.circleArr.findIndex(circle => circle.id === circleId);
            if (index !== -1) {
                this.circleArr.splice(index, 1);
            }
            console.log("se elimino el ", circleId);
            this.dibujaCirculos();

        }
    }
}
const app = new AppHolaMundo.P1();

