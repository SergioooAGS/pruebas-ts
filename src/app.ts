namespace AppHolaMundo {
    export class P2 {
        svgContenedor: d3.Selection<SVGElement, any, any, any>;
        circles: d3.Selection<SVGCircleElement, any, any, any>[] = [];
        offsetX = 0;
        offsetY = 0;
        newColor: d3.Selection<SVGAElement, any , any, any>;

        constructor() {
            this.svgContenedor = d3.select("#svgContenedor");
        }

        public createCircle() {
            const cx = 100;
            const cy = 100;
            const colors = d3.interpolate("Green", "Red");
            const newColor = colors(Math.random());
            const newCircle = this.svgContenedor.append("circle")
                .attr("cx", cx)
                .attr("cy", cy)
                .attr("r", 50)
                .attr("cursor", "grab")
                .attr("fill", newColor);
            
                console.log("Se ha creao un circulo");

            this.circles.push(newCircle);

            const dragStart = (event: any) => {
                this.offsetX = event.x - +newCircle.attr("cx") || 1000;
                this.offsetY = event.y - +newCircle.attr("cy") || 1000;
            }

            const dragging = (event: any) => {
                const newX = Math.max(0, Math.min(event.x - this.offsetX, 1500));
                const newY = Math.max(0, Math.min(event.y - this.offsetY, 1500));
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
                        .attr("fill", "red")
                        .remove()
                        console.log("se ha eliminado");
                }
            }

            newCircle.call(d3.drag()
                .on("start", dragStart)
                .on("drag", dragging)
                .on("end", dragEnd)
            );
        }
    }
}
