var AppHolaMundo;
(function (AppHolaMundo) {
    class P1 {
        constructor() {
            this._menu = false;
            const body = d3.select("body");
            this.svgleft = body.append('svg')
                .attr("class", "svgLeft")
                .attr('id', 'miSVG2')
                .attr('width', '300px')
                .attr('height', '809px')
                .style('background-color', "#4A4A4A")
                .style('position', "absolute")
                .style('left', "0px")
                .style('top', "100px")
                .attr('transform', 'translate(-200, 0)')
                .attr('id', 'svgleft');
            this._img = this.svgleft.append("image")
                .attr("class", "img-arrow")
                .attr('href', 'images/icono_flecha_derecha.svg')
                .attr('width', '50px')
                .attr('height', '50px')
                .attr('y', '15px')
                .attr('x', '220px')
                .style('cursor', 'pointer')
                .on('click', () => {
                this._menu = !this._menu;
                this.svgleft.transition()
                    .duration(900)
                    .attr("transform", !this._menu ? "translate(-200, 0)" : "translate(0, 0)")
                    .on('end', () => {
                    if (this._menu) {
                        this._img
                            .attr("transform", "rotate(180 245 40)");
                    }
                    else {
                        this._img
                            .attr("transform", "rotate(0 0 0)");
                    }
                });
                this.svgContenedor.transition()
                    .duration(900)
                    .attr('transform', !this._menu ? 'translate(0, 0)' : 'translate(200, 0)');
            });
            var g1 = this.svgleft.append("g")
                .on("click", () => {
                this._figuras = new AppHolaMundo.P2();
            });
            g1.append("rect")
                .attr("class", "botonDrag")
                .style('x', '50px')
                .style('y', '0')
                .style('rx', '20')
                .style('ry', '20')
                .style('fill', 'white')
                .style('position', 'absolute')
                .style('width', '100px')
                .style('height', '30px')
                .style('cursor', 'pointer');
            g1.append("text") //titulo
                .attr('y', '20px')
                .attr('x', '80px')
                .attr("font-family", "cursive")
                .attr('fill', 'black')
                .style('pointer-events', 'none')
                .text('Drag');
            var g2 = this.svgleft.append("g")
                .on('click', () => {
                this._clientes = new AppHolaMundo.P3();
                console.log("Ejemplo");
            });
            g2.append("rect")
                .style('x', '50px')
                .style('y', '40')
                .style('rx', '20')
                .style('ry', '20')
                .style('fill', 'white')
                .style('position', 'absolute')
                .style('width', '100px')
                .style('height', '30px')
                .style('cursor', 'pointer');
            g2.append("text")
                .attr('y', '60px')
                .attr('x', '65px')
                .attr('fill', 'black')
                .attr("font-family", "cursive")
                .style('pointer-events', 'none')
                .text('Empresas');
            this.svgHeader = body.append('svg')
                .attr("class", "heider")
                .attr('id', 'svgHeader')
                .attr('width', '1919px')
                .attr('height', '100px')
                //background color 
                .style('position', "absolute")
                .style('left', "0px")
                .style('top', "0px")
                .style('font-size', '50px')
                .style('border', '10px')
                .style('color', 'black')
                .style('pointer-events', 'none')
                .append("text")
                .attr('y', '65px')
                .attr('x', '800px')
                .attr('fill', 'White')
                .text('T I T U L O');
            this.svgContenedor = body.append('svg')
                .attr("id", "svgContenedor")
                .style('display', 'block')
                .attr('width', '1800')
                .attr('height', '795')
                .style('background-color', "white")
                .style('position', "absolute")
                .style('left', "100px")
                .style('top', "100px");
        }
    }
    AppHolaMundo.P1 = P1;
})(AppHolaMundo || (AppHolaMundo = {}));
const app = new AppHolaMundo.P1();
