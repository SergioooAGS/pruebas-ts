var bootCamp;
(function (bootCamp) {
    class P1 {
        constructor() {
            this._menu = false;
            const body = d3.select("body");
            this.svgleft = body.append("svg")
                .attr("class", "svgLeft")
                .attr('id', 'miSVG2')
                .attr('width', '300px')
                .attr('height', '809px')
                .style('background-color', "#0f2547")
                .style('position', "absolute")
                .style('left', "0px")
                .style('top', "100px")
                .style("border-bottom-right-radius", "100px")
                .attr('transform', 'translate(-200, 0)')
                .attr('id', 'svgleft');
            this._imgFlecha = this.svgleft.append("image")
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
                    //let arroow = d3.select("body").selectAll("svg")
                    if (this._menu) {
                        this._imgFlecha
                            .attr("transform", "rotate(180 245 40)");
                    }
                    else {
                        this._imgFlecha
                            .attr("transform", "rotate(0 0 0)");
                    }
                });
                this.svgContenedor.transition()
                    .duration(900)
                    .attr('transform', !this._menu ? 'translate(0, 0)' : 'translate(200, 0)');
            });
            let botonDragandDrop = this.svgleft.append("g")
                .on("click", () => {
                this.ventanaDrag();
            });
            botonDragandDrop.append("rect")
                .style('x', '50px')
                .style('y', '80')
                .style('rx', '20')
                .style('ry', '20')
                .style('fill', 'white')
                .style('position', 'absolute')
                .style('width', '100px')
                .style('height', '30px')
                .style('cursor', 'pointer');
            botonDragandDrop.append("text")
                .attr('y', '100px')
                .attr('x', '80px')
                .attr("font-family", "cursive")
                .attr('fill', 'black')
                .style('pointer-events', 'none')
                .text('Drag');
            let botonEmpresas = this.svgleft.append("g")
                .on('click', () => {
                this.ventanaEmpresas();
            });
            botonEmpresas.append("rect")
                .style('x', '50px')
                .style('y', '40')
                .style('rx', '20')
                .style('ry', '20')
                .style('fill', 'white')
                .style('position', 'absolute')
                .style('width', '100px')
                .style('height', '30px')
                .style('cursor', 'pointer');
            botonEmpresas.append("text")
                .attr('y', '60px')
                .attr('x', '65px')
                .attr('fill', 'black')
                .attr("font-family", "cursive")
                .style('pointer-events', 'none')
                .text('Empresas');
            let botonUsuarios = this.svgleft.append("g")
                .on("click", () => {
                this.ventanaUsuarios();
                console.log(this._usuarios);
            });
            botonUsuarios.append("rect")
                .style('x', '50px')
                .style('y', '0')
                .style('rx', '20')
                .style('ry', '20')
                .style('fill', 'white')
                .style('position', 'absolute')
                .style('width', '100px')
                .style('height', '30px')
                .style('cursor', 'pointer');
            botonUsuarios.append("text")
                .attr('y', '20px')
                .attr('x', '70px')
                .attr('fill', 'black')
                .attr("font-family", "cursive")
                .style('pointer-events', 'none')
                .text('Usuarios');
            let botonSalir = this.svgleft.append("g")
                .on('click', () => {
                close();
                console.log("SingOut");
            });
            botonSalir.append("rect")
                .style('x', '50px')
                .style('y', '120')
                .style('rx', '20')
                .style('ry', '20')
                .style('fill', 'white')
                .style('position', 'absolute')
                .style('width', '100px')
                .style('height', '30px')
                .style('cursor', 'pointer');
            botonSalir.append("text")
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
                .style("text-shadow", "5px 5px 5px black")
                .style("border-bottom-right-radius", "100px")
                .style("background-color", "#0f2547")
                .style("font-family", "cursive")
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
                .style("display", "block")
                .attr("width", "1650")
                .attr("height", "795")
                .style("background-color", "white")
                .style("position", "absolute")
                .style("left", "100px")
                .style("top", "100px");
            // this.moduloUsuarios = body.append("svg")
            //     .attr("id", "moduloUsuarios")
            //     .style('display', 'block')
            //     .attr('width', '1800')
            //     .attr('height', '795')
            //     .style('background-color', "white")
            //     .style('position', "absolute")
            //     .style('left', "100px")
            //     .style('top', "100px");
        }
        ventanaDrag() {
            this.svgContenedor.selectAll("*").remove();
            this._figuras = new bootCamp.dragAndDrop();
        }
        ventanaUsuarios() {
            this.svgContenedor.selectAll("*").remove();
            this._usuarios = new bootCamp.Usuarios();
        }
        ventanaEmpresas() {
            this.svgContenedor.selectAll("*").remove();
            this._empresas = new bootCamp.empresa();
        }
    }
    bootCamp.P1 = P1;
})(bootCamp || (bootCamp = {}));
const app = new bootCamp.P1();
