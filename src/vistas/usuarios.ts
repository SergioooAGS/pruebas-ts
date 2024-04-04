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
        public div: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>
        mapaUsuarios: Map<number, iUsuario>;
        //datosUsuarios: iUsuario[];
        private id = 0;
        nuevoUsuario: boolean;

        constructor() {
            const body = d3.select("body");
            this.svgContenedor = d3.select("#svgContenedor");
            this.svgRegistroUsuario = d3.select("#svgRegistroUsuario");
            this.id = 0;
            this.mapaUsuarios = new Map<number, iUsuario>();
            //this.datosUsuarios();
            this.nuevoUsuario = false;

            let offnewUser = this.svgContenedor.append("g")
                .on('click', () => {
                    this.nuevoUsuario = !this.nuevoUsuario;
                    this.div.style("display", !this.nuevoUsuario ? "none" : "block")
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

            this.NuevoUsuario();
            this.cargarUsuario();
        }

        public NuevoUsuario() {
            this.div = d3.select("body")
                .append("div")
                .attr("class", "nuevoUsuario")
                .style("box-shadow", "5px 5px 5px black")
                .style("display", "none");

            this.div.append("input")
                .attr("type", "text")
                .attr("placeholder", "Nombre");

            this.div.append("input")
                .attr("type", "text")
                .attr("placeholder", "Apellido paterno");

            this.div.append("input")
                .attr("type", "text")
                .attr("placeholder", "Apellido Materno");

            this.div.append("input")
                .attr("type", "text")
                .attr("placeholder", "Telefono");

            this.div.append("input")
                .attr("type", "text")
                .attr("placeholder", "Correo");

            this.div.append("input")
                .attr("type", "text")
                .attr("placeholder", "Usuario");

            this.div.style("position", "absolute")
                .style("margin", "2px")
                .style("top", "50%")
                .style("left", "50%")
                .style("transform", "translate(-50%, -50%)")
                .style("background-color", "#cdcdcd")
                .style("padding", "30px")
                .style("border", "1px solid black")
                .style("width", "280px")
                .style("height", "350px")
                .style("z-index", 20)
                .style("text-aling", "center");

            let btnSave = this.div.append("g")
                .attr("class", "btn-save")
                .on('click', () => {
                    //hacer lo mismo

                    this.cargarUsuario();
                });
            btnSave.append("rect")
                .attr("stroke", "black")
                .attr("stroke-width", "2px")
                .style('x', '760')
                .style("y", "560")
                .style('rx', '20')
                .style('ry', '20')
                .style("fill", "Green")
                .style('position', 'absolute')
                .style('width', '90px')
                .style('height', '40px')
                .style('cursor', 'pointer')

            btnSave.append("text")
                .attr('x', '775')
                .attr('y', '585')
                .attr('fill', 'white')
                .attr("font-family", "cursive")
                .style("cursor", "pointer")
                .text("Guardar");

            let btnCancel = this.div.append("g")
                .attr("class", "btn-cancel")
                .on('click', () => {
                    this.div.remove();
                });

            // btnCancel.append("rect")
            //     .attr("stroke", "black")
            //     .attr("stroke-width", "2px")
            //     .style('x', '860')
            //     .style("y", "560")
            //     .style('rx', '20')
            //     .style('ry', '20')
            //     .style("fill", "red")
            //     .style('position', 'absolute')
            //     .style('width', '90px')
            //     .style('height', '40px')
            //     .style('cursor', 'pointer')

            btnCancel.append("text")
                .attr('x', '870')
                .attr('y', '585')
                .attr('fill', 'white')
                .attr("font-family", "cursive")
                .style('pointer-events', 'none')
                .text("Cancelar");

            let divHeader = this.div.append("div")
                .attr("class", "headerDiv")

            divHeader.style("position", "absolute")
                .style("top", "0%")
                .style("left", "0%")
                .style("background-color", "#616161");

            divHeader.append("h3")
                .text("Registro Usuarios")
                .style("fill", "white");


            let divimg = this.div.append("div")
                .attr("class", "imgDiv")
                .style("position", "absolute")
                .attr("width", "32")
                .attr("height", "30")


            divimg.append("img")
                .attr("width", "32")
                .attr("height", "30")
                .style("top", "5px")
                .attr("right", "100px")
                .style("cursor", "pointer")
                .style("x", "200px")
                .style("y", "10px")

                .attr("src", "images/icon-cerrar.svg")
                .on("click", () => {
                    this.div.remove();
                });
        }

        public cargarUsuario() {
            let tUsuario: iUsuario = { id: this.id, nombre: "Sergio", apellidoP: "Garcia", apellidoM: "Salazar", telefono: "7711737058", correo: "sergio@gmail.com", usuario: "sergioGac" }
            this.mapaUsuarios.set(this.id, tUsuario);
            this.tablaUsuarios(); //watch
            this.id++;
        }

        public dibujaTabla() {
            let fila = d3.select("tbody").selectAll("tr")
                .data(this.mapaUsuarios.values(), (d: iUsuario) => d.id);
            fila.join(
                (enter) => {
                    let row = enter.append("tr")
                        .attr("class", "rows");
                    row.append("td")
                        .text((d) => d.id)

                    row.append("td")
                        .append("img")
                        .attr("src", "images/traash.svg")
                        .attr("width", "70")
                        .attr("height", "70")
                        .attr("x", "60")
                        .attr("y", "50")
                        .style("cursor", "pointer")

                    row.append("td")
                        .append("img")
                        .attr("src", "images/icono_editar.svg")
                        .attr("width", "60")
                        .attr("height", "60")
                        .attr("x", "80")
                        .attr("y", "50")
                        .style("cursor", "pointer")

                    row.append("td")
                        .text((d) => d.nombre)
                    row.append("td")
                        .text((d) => d.apellidoP)
                    row.append("td")
                        .text((d) => d.apellidoM)
                    row.append("td")
                        .text((d) => d.telefono)
                    row.append("td")
                        .text((d) => d.correo)
                    row.append("td")
                        .text((d) => d.usuario)

                    return row
                }),
                (update) => {
                    (update)
                    let row = update.append("tr")
                        .attr("class", "rows");
                    row.append("td")
                        .text((d: iUsuario) => d.id)

                    row.append("td")
                        .append("img")
                        .attr("src", "images/traash.svg")
                        .attr("width", "70")
                        .attr("height", "70")
                        .attr("x", "60")
                        .attr("y", "50")
                        .style("cursor", "pointer")

                    row.append("td")
                        .append("img")
                        .attr("src", "images/icono_editar.svg")
                        .attr("width", "60")
                        .attr("height", "60")
                        .attr("x", "80")
                        .attr("y", "50")
                        .style("cursor", "pointer")

                    row.append("td")
                        .text((d: iUsuario) => d.nombre)
                    row.append("td")
                        .text((d: iUsuario) => d.apellidoP)
                    row.append("td")
                        .text((d: iUsuario) => d.apellidoM)
                    row.append("td")
                        .text((d: iUsuario) => d.telefono)
                    row.append("td")
                        .text((d: iUsuario) => d.correo)
                    row.append("td")
                        .text((d: iUsuario) => d.usuario)
                    return update;
                },
                (exit) => {
                    exit
                        .remove()
                    return exit;
                }
        }
        public tablaUsuarios() {

            const tablaGroup = this.svgContenedor.append("g")
                .attr("transform", "translate(50, 100)");

            let tabla = tablaGroup.append("foreignObject")
                .attr("class", "tabla")
                .attr("width", 1500)
                .attr("height", 900)
                .append("xhtml:table")
                .attr("border", 1)
                .style("background-color", "#cdcdcd")
                .style("border", "1px solid #grey");

            tabla.append("thead")
                .append("tr")
                .selectAll("th")
                .data(["Id", "Editar", "Eliminar", "Nombre", "Apellido Paterno", "Apellido Materno", "Telefono", "Correo", "Usuario"])
                .enter()
                .append("th")
                .text((d: string) => d)
                .attr("font-family", "cursive")
                .attr("fill", "white")
                .attr("class", "tHead");

            let filas = tabla.selectAll("tr.usuario")
            //let Users: iUsuario[] = Array.from(this.mapaUsuarios.values());
            this.svgContenedor.selectAll("text")
            filas.enter()
                //.append("tr")
                .attr("class", "usuario")
            // .selectAll("td")
            // .data((d: iUsuario) => Object.values(d))
            // .enter()
            // .append("td")
            // .text((d: string) => d);

            filas.selectAll("td")
            // .data((d: iUsuario) => Object.values(d))
            // .text((d: string) => d);
            filas.exit()
                .remove();
            tabla.selectAll("tr")
                .selectAll("td")
            // .style("border", "1px solid #black")
            // .style("padding", "1px");
            tabla.append("tbody");
            this.dibujaTabla();
            //tabla.append("tfoot")
        }
    }
}
