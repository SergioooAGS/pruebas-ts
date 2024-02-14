namespace AppHolaMundo {
    export class P2 {
        svgHeader: d3.Selection<SVGElement, any, any, any>;
        svgContenedor: d3.Selection<SVGElement, any, any, any>;
        svgtop: d3.Selection<SVGElement, any,any,any>;
        svgRight: d3.Selection<SVGElement, any,any,any>;

        circles: d3.Selection<SVGCircleElement, any, any, any>[] = [];
        _figuras: P1;
        constructor() {
            const body = d3.select("body");
            
            //var menu = body.append('svg')   //
            //this.svgHeader.append("text").text("Hola mundo ")

            //     this.svgContenedor = body.append('image')
            // menu.append("image")
            //     .attr('href', 'images/traash.svg')
            //     .attr('width', '200')
            //     .attr('height', '200')
            //     .style('position', 'fixed') 
            //     .style('top', '28px') 
            //     .style('left', '20px'); 
        }
        
    }
}
var _app = new AppHolaMundo.P1();


