namespace AppHolaMundo {
    export interface iUsuario {
        id: number;
        nombre: string;
        apellidoP: string;
        apellidoM: string;
        telefono: string;
        correo: string;
        usuario: string;
    }
    export class P3 {
        public svgContenedor: d3.Selection<SVGElement, any, any, any>;
        public svgRegistroUsuario: d3.Selection<HTMLDivElement, any, any, any>;
        public div: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>;
        public divDelete: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>;
        public mapaUsuarios: Map<number, iUsuario>;
        private id = 0;
        private nuevoUsuario: boolean;
        private usuarioEliminar: boolean;

        constructor() {
            const body = d3.select("body");
            this.svgContenedor = d3.select("#svgContenedor");
            //this.svgRegistroUsuario = d3.select("#svgRegistroUsuario");
            this.id = 0;
            this.mapaUsuarios = new Map<number, iUsuario>();
            this.nuevoUsuario = false;
            this.usuarioEliminar = false;

            let apagarVentana = this.svgContenedor.append("g")
                .on("click", () => {
                    this.usuarioEliminar = !this.usuarioEliminar
                    this.divDelete.style("display", !this.usuarioEliminar ? "none" : "block")
                });


            let offnewUser = this.svgContenedor.append("g")
                .on('click', () => {
                    this.nuevoUsuario = !this.nuevoUsuario;
                    this.div.style("display", !this.nuevoUsuario ? "none" : "block")
                });
            offnewUser.append("rect")
                .attr("stroke", "black")
                .attr("stroke-width", "2px")
                .style("x", "1450")
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
                .attr("x", "1460px")
                .attr("fill", "white")
                .attr("font-family", "cursive")
                .style("pointer-events", "none")
                .text("Agregar");

            let selek = this.svgContenedor.append("select")
                .style("select", "Option1")
                .text("Hola1")
                .style("select", "Option2")


            let g9 = this.svgContenedor.append("g")

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
                .html('<input class="text" type="text" placeholder="Nombre" />')


            let g10 = this.svgContenedor.append("g")

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


            let tituloUsuario = this.svgContenedor.append("g")
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
        }

        public NuevoUsuario() {

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
                .style("background-color", "white")
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
                    this.div.style("display", !this.nuevoUsuario ? "none" : "block")
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
                    this.div.style("display", !this.nuevoUsuario ? "none" : "block")
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
                    this.div.style("display", !this.nuevoUsuario ? "none" : "block")
                });
        }

        public eliminarUsuario() {

            this.divDelete = d3.select("body")
                .append("div")
                .attr("class", "eliminarUsuario")
                .style("box-shadow", "5px 5px 5px black")
                .style("display", "none")
                .style("background-color", "white");

            this.divDelete.style("position", "absolute")
                .style("margin", "2px")
                .style("top", "50%")
                .style("left", "40%")
                .style("transform", "translate(-30%, -50%)")
                .style("background-color", "#red")
                .style("padding", "45px")
                .style("border", "1px solid black")
                .style("width", "300px")
                .style("height", "200px")
                .style("z-index", 20)
                .style("text-aling", "center");

            let titleeliminar = this.divDelete.append("h1")
                .style("position", "absolute")
                .style("pointer-events", "none")
                .style("top", "25%")
                .style("left", "5%")
                .style("color", "black")
                .style("font-family", "cursive")
                .style("text-aling", "center")
                .style("font-size", "18px");

            titleeliminar
                .text("¿Deseas eliminar este usuario?");

            let botonEliminar = this.divDelete.append("div")
                .on("click", () => {


                });

            botonEliminar.style("position", "absolute")
                .style("top", "55%")
                .style("left", "25%")
                .style("background-color", "#008afc")
                .style("padding", "4px")
                .style("border-radius", "10px");

            botonEliminar.append("text")
                .style("stroke", "black")
                .style("stroke-width", "2px")
                .style("x", "775")
                .style("y", "585")
                .style("color", "white")
                .style("font-family", "cursive")
                .style("cursor", "pointer")
                .text("Eliminar");

            let botonCancel = this.divDelete.append("div")
                .on('click', () => {
                    this.usuarioEliminar = !this.usuarioEliminar
                    this.divDelete.style("display", !this.usuarioEliminar ? "none" : "block")
                });

            botonCancel.style("position", "absolute")
                .style("top", "55%")
                .style("left", "51%")
                .style("background-color", "red")
                .style("padding", "4px")
                .style("border-radius", "10px");

            botonCancel.append("text")
                .style("stroke", "black")
                .style("stroke-width", "2px")
                .style("x", "775")
                .style("y", "585")
                .style("color", "white")
                .style("font-family", "cursive")
                .style("cursor", "pointer")
                .text("Cancelar");
        }

        public datosUsuarios() {
            let name = d3.select(".nuevoUsuario").select(".name").property("value");
            let apellidoP = d3.select(".nuevoUsuario").select(".apellidoP").property("value");
            let apellidoM = d3.select(".nuevoUsuario").select(".apellidoM").property("value");
            let phone = d3.select(".nuevoUsuario").select(".phone").property("value");
            let email = d3.select(".nuevoUsuario").select(".email").property("value");
            let user = d3.select(".nuevoUsuario").select(".user").property("value");

            if (name && apellidoP && apellidoM && apellidoM && phone && email && user) {
                let registrar = {
                    name: name,
                    apellidoP: apellidoP,
                    apellidoM: apellidoM,
                    phone: phone,
                    email: email,
                    user: user
                };
                let tUsuario = { id: this.id, nombre: name, apellidoP: apellidoP, apellidoM: apellidoM, telefono: phone, correo: email, usuario: user };
                this.mapaUsuarios.set(this.id, tUsuario);
                this.id++;
            } else {
                alert("No puedes agregar campos vacios");
            }
            this.div.selectAll("input").property("value", "");

        }

        public dibujaFila() {
            let fila = d3.select("tbody").selectAll("tr")
                .data(this.mapaUsuarios.values(), (d: iUsuario) => d.id);
            fila.join(
                (enter) => {
                    let row = enter.append("tr")
                        .attr("class", "rows")
                        .attr("fill", "white");
                    row.append("td")
                        .text((d) => d.id)

                    row.append("td")
                        .classed("deleteUser", true)
                        .append("img")
                        .attr("src", "images/traash.svg")
                        .attr("width", "70")
                        .attr("height", "70")
                        .attr("x", "60")
                        .attr("y", "50")
                        .style("cursor", "pointer")
                        .on("click", () => {
                            this.usuarioEliminar = !this.usuarioEliminar
                            this.divDelete.style("display", !this.usuarioEliminar ? "none" : "block")
                        });

                    row.append("td")
                        .append("img")
                        .attr("src", "images/icono_editar.svg")
                        .attr("width", "60")
                        .attr("height", "60")
                        .attr("x", "80")
                        .attr("y", "50")
                        .style("cursor", "pointer")
                        .on("click", () => {

                        });

                    row.append("td")
                        .classed("nombreUsuario", true)
                        .text((d) => d.nombre)

                    row.append("td")
                        .classed("apellidoP-usuario", true)
                        .text((d) => d.apellidoP)

                    row.append("td")
                        .classed("apellidoM-usuario", true)
                        .text((d) => d.apellidoM)

                    row.append("td")
                        .classed("telefono-usuario", true)
                        .text((d) => d.telefono)

                    row.append("td")
                        .classed("correo-usuario", true)
                        .text((d) => d.correo)

                    row.append("td")
                        .classed("usuario-user", true)
                        .text((d) => d.usuario)

                    return row
                }, (update) => {
                    update
                        .select(".nombreUsuario").text((d) => d.nombre)
                        .select(".apellidoP-usuario").text((d) => d.apellidoP)
                        .select(".apellidoM-usuario").text((d) => d.apellidoM)
                        .select(".telefono-usuario").text((d) => d.telefono)
                        .select(".correo-usuario").text((d) => d.correo)
                        .select(".usuario-user").text((d) => d.usuario)
                    return update
                }, (exit) => {
                    exit
                        .remove()
                    return exit;
                });
        }

        public dibujaHead() {
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
}
