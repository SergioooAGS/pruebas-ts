namespace AppHolaMundo {
    export class P1 {
        svgHeader: d3.Selection<SVGElement, any, any, any>;
        svgleft: d3.Selection<SVGElement, any, any, any>;
        _figuras: P2;
        _clientes: P3;

        constructor() {
            this.svgleft = d3.select("#svgLeft")
            this.svgHeader = d3.select("#header")
            const body = d3.select("body");

            this.svgleft = body.append('svg')
                .attr('id', 'miSVG2')
                .attr('width', '300px')
                .attr('height', '795px')
                .style('background-color', "grey")
                .style('position', "absolute")
                .style('left', "0px")
                .style('bottom', "0px")
                
                .attr('transform', 'translate(-200, 0)')
                .attr('id', 'svgleft');

            
            this.svgleft.append("image")
                .attr('href', 'images/arrow.svg')
                .attr('width', '100')
                .attr('height', '100')
                .attr('y', '20px')
                .attr('x', '205px')
                .on('click', () => {
                const lateralActual = d3.select('#svgleft');

                const isVisible = lateralActual.attr('transform') === 'translate(0, 0)';

                lateralActual.transition()
                    .duration(1000)
                    .attr('transform', isVisible ? 'translate(-200, 0)' : 'translate(0, 0)'); 
                            });


            var g1 = this.svgleft.append("g");
            g1.on('click', () => {
                this._figuras = new AppHolaMundo.P2();
            });

            g1.append("rect")
                .style('x', '50px')
                .style('y', '0')
                .style('rx', '20')
                .style('ry', '20')
                .style('fill', 'black')
                .style('position', 'absolute')
                .style('width', '100px')//tamaños de el rec
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
                console.log("Ejemplo")
            });

            g2.append("rect")
                .style('x', '0')
                .style('y', '40')
                .style('rx', '20')
                .style('ry', '20')
                .style('fill', 'black')
                .style('position', 'absolute')
                .style('width', '100px')//size rec
                .style('height', '30px')
                .style('cursor', 'auto');

            g2.append("text")
                .attr('y', '60px')
                .attr('x', '20px')
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
                .style('border','10px')
                .style('color','black')
                .append("text")
                .attr('y', '65px')
                .attr('x', '800px')
                .attr('fill', 'White')
                .text('T I T U L O');   
    }
  }
}