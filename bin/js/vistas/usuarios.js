var AppHolaMundo;
(function (AppHolaMundo) {
    class P3 {
        constructor() {
            this.id = 0;
            const body = d3.select("body");
            this.svgContenedor = d3.select("#svgContenedor");
            this.svgRegistroUsuario = d3.select("#svgRegistroUsuario");
            this.id = 0;
            this.mapaUsuarios = new Map();
            this.nuevoUsuario = false;
            this.eliminarUser = false;
            let offnewUser = this.svgContenedor.append("g")
                .on('click', () => {
                this.nuevoUsuario = !this.nuevoUsuario;
                this.div.style("display", !this.nuevoUsuario ? "none" : "block");
            });
            offnewUser.append("rect")
                .attr("stroke", "black")
                .attr("stroke-width", "2px")
                .style("x", "1250")
                .style("y", "25")
                .style("rx", "10")
                .style("ry", "10")
                .style("fill", "green")
                .style("position", "absolute")
                .style("width", "80px")
                .style("height", "40px")
                .style("cursor", "pointer");
            offnewUser.append("text")
                .attr("y", "48px")
                .attr("x", "1260px")
                .attr("fill", "white")
                .attr("font-family", "cursive")
                .style("pointer-events", "none")
                .text("Agregar");
            let g9 = this.svgContenedor.append("g");
            g9.append("foreignObject")
                .attr("class", "buscarName")
                .attr("type", "text")
                .style("width", "220px")
                .style("height", "30px")
                .style("x", "820")
                .style("y", "30")
                .style("position", "absolute")
                .style("top", "50px")
                .style("left", "0")
                .html('<input class="text" type="text" placeholder="Nombre" />');
            let g10 = this.svgContenedor.append("g");
            g10.append("foreignObject")
                .attr("class", "buscarAp")
                .attr("type", "text")
                .style("width", "220px")
                .style("height", "30px")
                .style("x", "1030")
                .style("y", "30")
                .style("position", "absolute")
                .style("top", "50px")
                .style("left", "0")
                .html('<input class="text2" type="text" placeholder="Buscar" />');
            let tituloUsuario = this.svgContenedor.append("g");
            tituloUsuario.append("foreignObject")
                .text("Usuarios")
                .style("width", "220px")
                .style("height", "30px")
                .style("x", "50")
                .style("y", "20")
                .style("position", "absolute")
                .style("font-size", "27px")
                .style("font-family", "cursive")
                .style("top", "50px")
                .style("left", "0");
            this.dibujaHead();
            this.NuevoUsuario();
            this.eliminarUsuario();
            //this.cargarUsuario();
        }
        NuevoUsuario() {
            this.div = d3.select("body")
                .append("div")
                .attr("class", "nuevoUsuario")
                .style("box-shadow", "5px 5px 5px black")
                .style("display", "none");
            this.div.append("input")
                .classed("name", true)
                .attr("type", "text")
                .attr("placeholder", "Nombre");
            this.div.append("input")
                .classed("apellidoP", true)
                .attr("type", "text")
                .attr("placeholder", "Apellido paterno");
            this.div.append("input")
                .classed("apellidoM", true)
                .attr("type", "text")
                .attr("placeholder", "Apellido Materno");
            this.div.append("input")
                .classed("phone", true)
                .attr("type", "text")
                .attr("placeholder", "Telefono");
            this.div.append("input")
                .classed("email", true)
                .attr("type", "text")
                .attr("placeholder", "Correo");
            this.div.append("input")
                .classed("user", true)
                .attr("type", "text")
                .attr("placeholder", "Usuario");
            this.div.style("position", "absolute")
                .style("margin", "2px")
                .style("top", "50%")
                .style("left", "50%")
                .style("transform", "translate(-50%, -50%)")
                .style("background-color", "#cdcdcd")
                .style("padding", "45px")
                .style("border", "1px solid black")
                .style("width", "280px")
                .style("height", "350px")
                .style("z-index", 20)
                .style("text-aling", "center");
            let divHeader = this.div.append("div")
                .attr("class", "headerDiv")
                .style("pointer-events", "none");
            divHeader.style("position", "absolute")
                .style("top", "0%")
                .style("left", "0%")
                .style("background-color", "#4A4A4A");
            divHeader.append("h3")
                .text("Registro Usuarios")
                .style("fill", "white");
            let botonGuardar = this.div.append("div")
                .on("click", () => {
                this.datosUsuarios();
                this.dibujaFila();
                this.nuevoUsuario = !this.nuevoUsuario;
                this.div.style("display", !this.nuevoUsuario ? "none" : "block");
            });
            botonGuardar.style("position", "absolute")
                .style("top", "55%")
                .style("left", "24%")
                .style("background-color", "green")
                .style("padding", "4px")
                .style("border-radius", "10px");
            botonGuardar.append("text")
                .style("stroke", "black")
                .style("stroke-width", "2px")
                .attr('x', '775')
                .attr('y', '585')
                .attr("font-family", "cursive")
                .style("cursor", "pointer")
                .text("Guardar");
            let botonCancelar = this.div.append("div")
                .on('click', () => {
                this.nuevoUsuario = !this.nuevoUsuario;
                this.div.style("display", !this.nuevoUsuario ? "none" : "block");
            });
            botonCancelar.style("position", "absolute")
                .style("top", "55%")
                .style("left", "51%")
                .style("background-color", "red")
                .style("padding", "4px")
                .style("border-radius", "10px");
            botonCancelar.append("text")
                .style("stroke", "black")
                .style("stroke-width", "2px")
                .attr('x', '775')
                .attr('y', '585')
                .style('fill', 'red')
                .attr("font-family", "cursive")
                .style("cursor", "pointer")
                .text("Cancelar");
            let divimg = this.div.append("div")
                .attr("class", "imgDiv")
                .style("position", "absolute")
                .attr("width", "32")
                .attr("height", "30");
            divimg.append("img")
                .attr("width", "32")
                .attr("height", "30")
                .style("top", "5px")
                .attr("right", "100px")
                .style("cursor", "pointer")
                .style("x", "200px")
                .style("y", "10px")
                .attr("src", "images/icon-cerrar.svg")
                .on('click', () => {
                this.nuevoUsuario = !this.nuevoUsuario;
                this.div.style("display", !this.nuevoUsuario ? "none" : "block");
            });
        }
        eliminarUsuario() {
            this.divDelete = d3.select("body")
                .append("div")
                .attr("class", "eliminarUsuario")
                .style("box-shadow", "5px 5px 5px black")
                .style("display", "none");
            this.divDelete.style("position", "absolute")
                .style("margin", "2px")
                .style("top", "50%")
                .style("left", "50%")
                .style("transform", "translate(-30%, -50%)")
                .style("background-color", "#cdcdcd")
                .style("padding", "45px")
                .style("border", "1px solid black")
                .style("width", "120px")
                .style("height", "160px")
                .style("z-index", 20)
                .style("text-aling", "center");
        }
        datosUsuarios() {
            let name = d3.select(".nuevoUsuario").select(".name").property("value");
            let apellidoP = d3.select(".nuevoUsuario").select(".apellidoP").property("value");
            let apellidoM = d3.select(".nuevoUsuario").select(".apellidoM").property("value");
            let phone = d3.select(".nuevoUsuario").select(".phone").property("value");
            let email = d3.select(".nuevoUsuario").select(".email").property("value");
            let user = d3.select(".nuevoUsuario").select(".user").property("value");
            let tUsuario = { id: this.id, nombre: name, apellidoP: apellidoP, apellidoM: apellidoM, telefono: phone, correo: email, usuario: user };
            this.mapaUsuarios.set(this.id, tUsuario);
            this.id++;
            this.div.selectAll("input").property("value", "");
        }
        dibujaFila() {
            let fila = d3.select("tbody").selectAll("tr")
                .data(this.mapaUsuarios.values(), (d) => d.id);
            fila.join((enter) => {
                let row = enter.append("tr")
                    .attr("class", "rows")
                    .attr("fill", "white");
                row.append("td")
                    .text((d) => d.id);
                row.append("td")
                    .append("img")
                    .attr("src", "images/traash.svg")
                    .attr("width", "70")
                    .attr("height", "70")
                    .attr("x", "60")
                    .attr("y", "50")
                    .style("cursor", "pointer")
                    .on("click", () => {
                    this.eliminarUsuario();
                    // if (this.mapaUsuarios.has(d.id)) {
                    //     this.mapaUsuarios.delete(d.id);
                    //     this.dibujaFila();
                    // }
                });
                row.append("td")
                    .append("img")
                    .attr("src", "images/icono_editar.svg")
                    .attr("width", "60")
                    .attr("height", "60")
                    .attr("x", "80")
                    .attr("y", "50")
                    .style("cursor", "pointer");
                row.append("td")
                    .text((d) => d.nombre);
                row.append("td")
                    .text((d) => d.apellidoP);
                row.append("td")
                    .text((d) => d.apellidoM);
                row.append("td")
                    .text((d) => d.telefono);
                row.append("td")
                    .text((d) => d.correo);
                row.append("td")
                    .text((d) => d.usuario);
                return row;
            }),
                (update) => {
                    (update).select("td")
                        .text((d) => d.id);
                    return update;
                },
                (exit) => {
                    exit
                        .remove();
                    return exit;
                };
        }
        dibujaHead() {
            let tablaGrupo = this.svgContenedor.append("g")
                .attr("transform", "translate(50, 100)");
            let head = tablaGrupo.append("foreignObject")
                .attr("class", "tabla")
                .style("overflow", "auto")
                .style("background-color", "#cacaca")
                .style("width", 1500)
                .style("height", 900)
                .append("xhtml:table")
                .style("color", "white")
                .attr("border", 1)
                .style("background-color", "#cdcdcd")
                .style("border", "1px #black");
            let thead = head.append("thead");
            let tr = thead.append("tr");
            ["Id", "Eliminar", "Editar", "Nombre", "Apellido Paterno", "Apellido Materno", "Telefono", "Correo", "Usuario"].forEach(encabezado => {
                tr.append("th")
                    .style("font-family", "cursive")
                    .style("font-size", "20px")
                    .style("width", "1500px")
                    .style("background-color", "#4A4A4A")
                    .text(encabezado);
            });
            head.append("tbody");
            this.dibujaFila();
        }
    }
    AppHolaMundo.P3 = P3;
})(AppHolaMundo || (AppHolaMundo = {}));
