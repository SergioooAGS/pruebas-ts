var AppHolaMundo;
(function (AppHolaMundo) {
    class P3 {
        constructor() {
            app._figuras.svgContenedor;
            this.svgContenedor = d3.select("#svgContenedor");
            this.svgContenedor.append("image")
                .attr("id", "imageB")
                .attr("class", "imgBasura")
                .attr('href', 'images/traash.svg')
                .attr('width', '100')
                .attr('height', '100');
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
                .text('USUARIOSS');
        }
    }
    AppHolaMundo.P3 = P3;
})(AppHolaMundo || (AppHolaMundo = {}));
