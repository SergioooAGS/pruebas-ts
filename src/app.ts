namespace AppHolaMundo {
    export class P1 {
        svgContenedor: d3.Selection<SVGElement, any, any, any>;
        circles: d3.Selection<SVGCircleElement, any, any, any>[] = [];
        newColor: d3.Selection<SVGAElement, any , any, any>;
        btnA: d3.Selection<Element, any,any,any>
        svgHeader: d3.Selection<SVGElement, any, any, any>;
        offsetX = 0;
        offsetY = 0;
        
        constructor() {
            this.svgContenedor = d3.select("#svgContenedor");
            this.btnA = d3.select("#BtnAd");
            const body = d3.select("body");

        //contenedor left
            var menu = body.append('svg')
                .attr('id', 'miSVG2')
                .attr('width', '100')
                .attr('height', '911')
                .style('background-color', "grey")
                .style('position', "absolute")
                .style('left', "0px")
                .style('top', "0px");
            
                this.svgHeader = body.append('svg')   //bote trash-id
                .attr('id', 'svgHeader')
                .attr('width', '1800')
                .attr('height', '100')
                .style('background-color', "Grey")
                .style('position', "absolute")
                .style('left', "100px")
                .style('top', "0px");
 
            this.svgContenedor = body.append('svg')   //bote trash-id
            .attr("id", "svgContenedor")
            .attr('width', '1800')
            .attr('height', '811')
            .style('background-color', "black")
            .style('position', "absolute")
            .style('left', "100px")
            .style('top', "100px");



        //contenedor top

            this.svgContenedor.append("image")
                .attr('href', 'images/traash.svg')
                .attr('width', '100')
                .attr('height', '100')
                .style('position', 'absolute') 
                .style('top', '170px') 
                .style('right', '120px'); 


            var boton = body.append('button').text('add circle')
                .attr('width', '50px')
                .attr('height', '50px')
                .style('position', 'absolute') 
                .style('top', '120px') 
                .style('left', '200px')
                boton.on('click', () => {
                this.createCircle();
                console.log("se ha creado un circulo")
            });

        }
    
        public createCircle() {
            const cx = 300;
            const cy = 300;
            const colors = d3.interpolate("Green", "Red");
            const newColor = colors(Math.random());
            const newCircle = this.svgContenedor.append("circle")
                .attr("cx", cx)
                .attr("cy", cy)
                .attr("r", 50)
                .attr("cursor", "grab")
                .attr("fill", newColor)
                .attr("overflow", "visible");
            

            this.circles.push(newCircle);

            const dragStart = (event: any) => {
                this.offsetX = event.x - +newCircle.attr("cx") || 1000;
                this.offsetY = event.y - +newCircle.attr("cy") || 1000;
            }

            const dragging = (event: any) => {
                const newX = Math.max(0, Math.min(event.x - this.offsetX, 1700));
                const newY = Math.max(0, Math.min(event.y - this.offsetY, 700));
                newCircle.attr("cx", newX).attr("cy", newY);
            }

            const dragEnd = (event: any) => {
                const circleX = +newCircle.attr("cx") || 0;
                const circleY = +newCircle.attr("cy") || 0;

                const image = d3.select("image");
                const imageX = +image.attr("x") || 0;
                const imageY = +image.attr("y") || 0;
                const imageWidth = +image.attr("width") || 0;
                const imageHeight = +image.attr("height") || 0;

                if (
                    circleX >= imageX &&
                    circleX <= imageX + imageWidth &&
                    circleY >= imageY &&
                    circleY <= imageY + imageHeight
                ) {
                    newCircle.transition()
                        .duration(500)
                        .attr("r", 0)
                        .attr("fill", "white")
                        .remove()
                        console.log("se ha eliminado");
                }
            }
            newCircle.call(d3.drag()
                .on("start", dragStart)
                .on("drag", dragging)
                .on("end", dragEnd));

           
        }
    }
    //var _app = new AppHolaMundo.P1();
    
}
