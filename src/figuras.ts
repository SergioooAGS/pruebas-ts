namespace AppHolaMundo {
    export class P1 {
        svgHeader: d3.Selection<SVGElement, any, any, any>;
        svgContenedor: d3.Selection<SVGElement, any, any, any>;
        circles: d3.Selection<SVGCircleElement, any, any, any>[] = [];
        _p2: P2;
        
        constructor() {
            const body = d3.select("body");

            var menu = body.append('svg')   //bote trash-id
                .attr('id', 'miSVG2')
                .attr('width', '100')
                .attr('height', '900')
                .style('background-color', "grey")
                .style('position', "absolute")
                .style('left', "0px")
                .style('top', "0px");

                this.svgContenedor = body.append('image')
            menu.append("image")
                .attr('href', 'images/trash.svg')
                .attr('width', '200')
                .attr('height', '200')
                .style('position', 'fixed') 
                .style('top', '28px') 
                .style('left', '20px'); 

                //se crea un btn y se le añade la propiedad para que este imprima el circulo
            
            var boton = body.append('button').text('add circle')
                .style('position', 'fixed') 
                .style('top', '20px') 
                .style('left', '20px'); 
                boton.on('click', () => {
                this._p2.createCircle();
            });

            this.svgHeader = body.append('svg')   //bote trash-id
                .attr('id', 'svgHeader')
                .attr('width', '800')
                .attr('height', '100')
                .style('background-color', "grey")
                .style('position', "absolute")
                .style('left', "100px")
                .style('top', "0px");

            this.svgHeader.append("text").text("Hola mundo ")

            this.svgContenedor = body.append('svg')   //bote trash-id
                .attr("id", "svgContenedor")
                .attr('width', '800')
                .attr('height', '800')
                .style('background-color', "black")
                .style('position', "absolute")
                .style('left', "100px")
                .style('top', "100px");

            this._p2 = new P2();
        }
    }
}
var _app = new AppHolaMundo.P1();


