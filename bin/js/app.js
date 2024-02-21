var AppHolaMundo;
(function (AppHolaMundo) {
    class P1 {
        constructor() {
            this._menu = false;
            this.svgContenedor = d3.select("#svgContenedor"); ////
            this.svgleft = d3.select("#svgLeft");
            this.svgHeader = d3.select("#header");
            const body = d3.select("body");
            this.svgleft = body.append('svg')
                .attr('id', 'miSVG2')
                .attr('width', '300px')
                .attr('height', '795px')
                .style('background-color', "grey")
                .style('position', "absolute")
                .style('left', "0px")
                .style('top', "100px")
                .attr('transform', 'translate(-200, 0)')
                .attr('id', 'svgleft');
            this.svgleft.append("image")
                .attr('href', 'images/arrow.svg')
                .attr('width', '100')
                .attr('height', '100')
                .attr('y', '20px')
                .attr('x', '205px')
                .on('click', () => {
                this.svgleft.transition()
                    .duration(1000)
                    .attr('transform', !this._menu ? 'translate(-200, 0)' : 'translate(0, 0)');
                this.svgContenedor.transition()
                    .duration(1000)
                    .attr('transform', !this._menu ? 'translate(0, 0)' : 'translate(200, 0)');
                this._menu = !this._menu;
            });
            var g1 = this.svgleft.append("g");
            g1.on("click", () => {
                //debugger
                this._figuras = new AppHolaMundo.P2();
            });
            g1.append("rect")
                .style('x', '50px')
                .style('y', '0')
                .style('rx', '20')
                .style('ry', '20')
                .style('fill', 'black')
                .style('position', 'absolute')
                .style('width', '100px') //tamaños de el rec
                .style('height', '30px')
                .style('cursor', 'pointer')
                .style('pointer-events', 'auto');
            g1.append("text") //titulo
                .attr('y', '20px')
                .attr('x', '80px')
                .attr('fill', 'white')
                .text('Drag');
            var g2 = this.svgleft.append("g");
            g2.on('click', () => {
                this._clientes = new AppHolaMundo.P3();
                console.log("Ejemplo");
            });
            g2.append("rect")
                .style('x', '50px')
                .style('y', '40')
                .style('rx', '20')
                .style('ry', '20')
                .style('fill', 'black')
                .style('position', 'absolute')
                .style('width', '100px') //size rec
                .style('height', '30px')
                .style('cursor', 'auto');
            g2.append("text")
                .attr('y', '60px')
                .attr('x', '70px')
                .attr('fill', 'white')
                .text('Ejemplo 2');
            this.svgHeader = body.append('svg')
                .attr('id', 'svgHeader')
                .attr('width', '1950px')
                .attr('height', '100px')
                .style('background-color', "Grey")
                .style('position', "absolute")
                .style('left', "0px")
                .style('top', "0px")
                .style('font-size', '50px')
                .style('border', '10px')
                .style('color', 'black')
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
                .style('background-color', "black")
                .style('position', "absolute")
                .style('left', "100px")
                .style('top', "100px");
        }
    }
    AppHolaMundo.P1 = P1;
})(AppHolaMundo || (AppHolaMundo = {}));
