var AppHolaMundo;
(function (AppHolaMundo) {
    class P1 {
        constructor() {
            this.svgContenedor = d3.select("#svgContenedor");
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
            var g1 = this.svgleft.append("g")
                .attr('transform', 'translate(0, 0)')
                .style('fill', 'Black')
                .style('position', 'absolute')
                .style('top', '100px')
                .style('right', '40px');
            g1.append("rect")
                .attr('width', '100px')
                .attr('height', '30px')
                .style('cursor', 'pointer');
            g1.append("text")
                .attr('y', '17px')
                .attr('x', '20px')
                .attr('fill', 'white')
                .text('Figuras');
            g1.on('click', () => {
            });
            this.svgHeader = body.append('svg')
                .attr('id', 'svgHeader')
                .attr('width', '1800')
                .attr('height', '100')
                .style('background-color', "Grey")
                .style('position', "absolute")
                .style('left', "0px")
                .style('top', "0px");
            this.svgContenedor = body.append('svg')
                .attr("id", "svgContenedor")
                .attr('width', '1800')
                .attr('height', '811')
                .style('background-color', "black")
                .style('position', "absolute")
                .style('left', "100px")
                .style('top', "100px");
            this.svgContenedor.append("image")
                .attr('href', 'images/traash.svg')
                .attr('width', '100')
                .attr('height', '100')
                .style('position', 'absolute')
                .style('top', '170px')
                .style('right', '120px');
            this.svgContenedor.append('rect')
                .style('width', '50px')
                .style('height', '30px')
                .style('fill', 'white');
            var g = this.svgContenedor.append("g")
                .style('y', '15px')
                .style('width', '120px')
                .style('height', '230px')
                .style('fill', 'red')
                .style('position', 'static')
                .style('bottom', '300px')
                .style('right', '40px');
            g.append("rect")
                .attr('width', '100px')
                .attr('height', '30px')
                .style('cursor', 'pointer');
            g.append("text")
                .attr('y', '15px')
                .attr('y', '17px')
                .attr('x', '15px')
                .attr('fill', 'white')
                .text('Add Circle');
            g.on('click', () => {
                this._figuras.createCircle();
                console.log('klik');
            });
            this._figuras = new AppHolaMundo.P2;
        }
    }
    AppHolaMundo.P1 = P1;
})(AppHolaMundo || (AppHolaMundo = {}));
//# sourceMappingURL=app.js.map