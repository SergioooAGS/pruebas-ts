namespace AppHolaMundo {
    export class P1 {
        public svgContenedor: d3.Selection<SVGElement, any, any, any>;
        public svgRegistroUsuario: d3.Selection<SVGElement, any, any, any>;
        public svgHeader: d3.Selection<SVGElement, any, any, any>;
        svgleft: d3.Selection<SVGElement, any, any, any>;
        _figuras: dragAndDrop;
        _usuarios: Usuarios;
        //_empresas: Empresas;
        _img: d3.Selection<SVGImageElement, any, any, any>;
        _menu: boolean;

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
                            } else {
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
                    this.ventanaDrag();
                    console.log(this._figuras);
                });
            g1.append("rect")
                .style('x', '50px')
                .style('y', '80')
                .style('rx', '20')
                .style('ry', '20')
                .style('fill', 'white')
                .style('position', 'absolute')
                .style('width', '100px')
                .style('height', '30px')
                .style('cursor', 'pointer');
            g1.append("text") //titulo
                .attr('y', '100px')
                .attr('x', '80px')
                .attr("font-family", "cursive")
                .attr('fill', 'black')
                .style('pointer-events', 'none')
                .text('Drag');


            var g2 = this.svgleft.append("g")
                .on('click', () => {
                    // this._clientes = new AppHolaMundo.P3();
                    console.log("empresas")
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

            var g3 = this.svgleft.append("g")
                .on("click", () => {
                    this.ventanaUsuarios();
                    console.log(this._usuarios);
                });
            g3.append("rect")
                .style('x', '50px')
                .style('y', '0')
                .style('rx', '20')
                .style('ry', '20')
                .style('fill', 'white')
                .style('position', 'absolute')
                .style('width', '100px')
                .style('height', '30px')
                .style('cursor', 'pointer');
            g3.append("text")
                .attr('y', '20px')
                .attr('x', '70px')
                .attr('fill', 'black')
                .attr("font-family", "cursive")
                .style('pointer-events', 'none')
                .text('Usuarios');

            var g4 = this.svgleft.append("g")
                .on('click', () => {
                    close();
                    console.log("SingOut")
                });
            g4.append("rect")
                .style('x', '50px')
                .style('y', '120')
                .style('rx', '20')
                .style('ry', '20')
                .style('fill', 'white')
                .style('position', 'absolute')
                .style('width', '100px')
                .style('height', '30px')
                .style('cursor', 'pointer');
            g4.append("text")
                .attr('y', '140px')
                .attr('x', '65px')
                .attr('fill', 'black')
                .attr("font-family", "cursive")
                .style('pointer-events', 'none')
                .text('Sing Out');


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
                .text('B O O T - C A M P');

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

        public ventanaDrag() {
            this.svgContenedor.selectAll("*").remove();
            this._figuras = new dragAndDrop();
        }
        public ventanaUsuarios() {
            this.svgContenedor.selectAll("*").remove();
            this._usuarios = new Usuarios()
            //this.svgRegistroUsuario = new P3();
        }
    }
}
const app = new AppHolaMundo.P1();