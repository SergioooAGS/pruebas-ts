namespace AppHolaMundo {
    export class P2 {
        svgContenedor: d3.Selection<SVGElement, any, any, any>;
        offsetX = 0;
        offsetY = 0;

        constructor() {
            this.svgContenedor = d3.select("#svgContenedor");
        }

        cx: number = 100;
        cy: number = 100;
        public createCircle() {
            const newCircle = this.svgContenedor.append("circle")
                .attr("cx", this.cx)
                .attr("cy", this.cy)
                .attr("r", 50)
                .attr("fill", "white")
                .attr("cursor", "grab");

            const dragStart = (event: any) => {
                this.offsetX = event.x - +newCircle.attr("cx") || 0;
                this.offsetY = event.y - +newCircle.attr("cy") || 0;
            }

            const dragging = (event: any) => {
                
                const newX = Math.max(50, Math.min(event.x - this.offsetX, 1500));
                const newY = Math.max(50, Math.min(event.y - this.offsetY, 1500));
                newCircle.attr("cx", newX).attr("cy", newY);
            }

            const dragEnd = (event: any) => {
                const selection = d3.select("image");
                const funX = +selection.attr("cx") || 0;
                const funY = +selection.attr("cy") || 0;
                const image = d3.select("image");
                const imageX = +image.attr("x") || 0;
                const imageY = +image.attr("y") || 0;
                const imageWidth = +image.attr("width") || 0;
                const imageHeight = +image.attr("height") || 0;

                if (
                    funX >= imageX &&
                    funX <= imageX + imageWidth &&
                    funY >= imageY &&
                    funY <= imageY + imageHeight
                ) {
                    selection.transition()
                        .duration(500)
                        .attr("r", 0)
                        .attr("fill", "transparent")
                        .remove;
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
