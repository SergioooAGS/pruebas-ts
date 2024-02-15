var AppHolaMundo;
(function (AppHolaMundo) {
    class P1 {
        constructor() {
            this.svgleft = d3.select("#svgLeft");
            const body = d3.select("body");
            this.svgleft = body.append('svg')
                .attr('id', 'miSVG2')
                .attr('width', '100px')
                .attr('height', '795px')
                .style('background-color', "grey")
                .style('position', "absolute")
                .style('left', "0px")
                .style('bottom', "0px");
            var g1 = this.svgleft.append("g");
            g1.append("rect")
                .style('x', '0')
                .style('y', '0')
                .style('rx', '20')
                .style('ry', '20')
                .style('fill', 'black')
                .style('position', 'absolute')
                .style('width', '100px') //tamaños de el rec
                .style('height', '30px')
                .style('cursor', 'value');
            g1.append("text")
                .attr('y', '20px')
                .attr('x', '25px')
                .attr('fill', 'white')
                .text('Figuras');
            g1.on('click', () => {
                this._figuras = new AppHolaMundo.P2;
                console.log("Figuras");
            });
            var g2 = this.svgleft.append("g");
            g2.append("rect")
                .style('x', '0')
                .style('y', '40')
                .style('rx', '20')
                .style('ry', '20')
                .style('fill', 'black')
                .style('position', 'absolute')
                .style('width', '100px') //size rec
                .style('height', '30px')
                .style('cursor', 'pointer');
            g2.append("text")
                .attr('y', '60px')
                .attr('x', '20px')
                .attr('fill', 'white')
                .text('Ejemplo 2');
            g2.on('click', () => {
                //this._clientes = new AppHolaMundo.P3;
                console.log("Ejemplo");
            });
            this.svgHeader = body.append('svg')
                .attr('id', 'svgHeader')
                .attr('width', '1950px')
                .attr('height', '100px')
                .style('background-color', "Grey")
                .style('position', "absolute")
                .style('left', "0px")
                .style('top', "0px");
        }
    }
    AppHolaMundo.P1 = P1;
})(AppHolaMundo || (AppHolaMundo = {}));
//# sourceMappingURL=app.js.map