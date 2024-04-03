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
        mapaUsuarios: Map<number, iUsuario>;
        //datosUsuarios: iUsuario[];
        private id = 0;

        constructor() {
            const body = d3.select("body");
            this.svgContenedor = d3.select("#svgContenedor");
            this.svgRegistroUsuario = d3.select("#svgRegistroUsuario");
            this.id = 0;
            this.mapaUsuarios = new Map<number, iUsuario>();
            //this.datosUsuarios();
            this.cargarUsuario();

            var g5 = this.svgRegistroUsuario.append("g")
            g5.append("text")
                .attr('y', '20px')
                .attr('x', '115px')
                .attr('fill', 'red')
                .attr("font-family", "cursive")
                .style('pointer-events', 'none')
                .text('Usuarios');

            g5.append("text")
                .attr("fill", "white")
                .text("CHALE")
                .attr('y', '60px')
                .attr('x', '115px')

            let g = this.svgContenedor.append("g")
                .on('click', () => {
                    this.cargarUsuario();
                });
            g.append("rect")
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

            g.append("text")
                .attr("y", "48px")
                .attr("x", "1260px")
                .attr("fill", "white")
                .attr("font-family", "cursive")
                .style("pointer-events", "none")
                .text("Agregar");

            let g8 = this.svgContenedor.append("g")
                .on('click', () => {
                    this.NuevoUsuario();
                });

            g8.append("rect")
                .attr("stroke", "black")
                .attr("stroke-width", "2px")
                .style('x', '650')
                .style("y", "25")
                .style('rx', '20')
                .style('ry', '20')
                .style("fill", "red")
                .style('position', 'absolute')
                .style('width', '120px')
                .style('height', '40px')
                .style('cursor', 'pointer');

            g8.append("text")
                .attr("y", "45px")
                .attr("x", "680px")
                .attr('fill', 'white')
                .attr("font-family", "cursive")
                .style('pointer-events', 'none')
                .text("Nuevo");

            let g9 = this.svgContenedor.append("g")

            g9.append("foreignObject")
                .attr("class", "buscarName")
                .attr("type", "text")
                .style("width", "220px")
                .style("height", "30px")
                .style("x", "800")
                .style("y", "35")
                .style("position", "absolute")
                .style("top", "50px")
                .style("left", "0")
                .html('<input type="text" placeholder="Nombre" />');

            let g10 = this.svgContenedor.append("g")

            g10.append("foreignObject")
                .attr("class", "buscarAp")
                .attr("type", "text")
                .style("width", "220px")
                .style("height", "30px")
                .style("x", "1000")
                .style("y", "35")
                .style("position", "absolute")
                .style("top", "50px")
                .style("left", "0")
                .html('<input type="text" placeholder="Buscar" />');
        }

        public NuevoUsuario() {
            let div = d3.select("body")
                .append("div")
                .attr("class", "nuevoUsuario")
                .style("box-shadow", "5px 5px 5px black");

            div.append("img")
                .attr("src", "images/icon-cerrar.svg")
                .attr("alt", "Cerrar")
                .on("click", () => {
                    div.remove();
                })
                .attr("aling-items", "right")
                .attr("width", "20")
                .attr("height", "20")
                .style("top", "5px")
                .style("right", "5px")
                .style("cursor", "pointer");


            div.append("h3")
                .text("Registro Usuarios")
                .style("text-aling", "center")
                .style("fill", "red")
                .style("padding", "5px")
                .style("top", "10px");

            div.append("input")
                .attr("type", "text")
                .attr("placeholder", "Nombre");

            div.append("input")
                .attr("type", "text")
                .attr("placeholder", "Apellido paterno");

            div.append("input")
                .attr("type", "text")
                .attr("placeholder", "Apellido Materno");

            div.append("input")
                .attr("type", "text")
                .attr("placeholder", "Telefono");

            div.append("input")
                .attr("type", "text")
                .attr("placeholder", "Correo");

            div.append("input")
                .attr("type", "text")
                .attr("placeholder", "Usuario");

            div.style("position", "absolute")
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


            let btnSave = div.append("g")
                .on('click', () => {
                    //this.NuevoUsuario();
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

            let btnCancel = div.append("g")
                .on('click', () => {
                });

            btnCancel.append("rect")
                .attr("stroke", "black")
                .attr("stroke-width", "2px")
                .style('x', '860')
                .style("y", "560")
                .style('rx', '20')
                .style('ry', '20')
                .style("fill", "red")
                .style('position', 'absolute')
                .style('width', '90px')
                .style('height', '40px')
                .style('cursor', 'pointer')

            btnCancel.append("text")
                .attr('x', '870')
                .attr('y', '585')
                .attr('fill', 'white')
                .attr("font-family", "cursive")
                .style('pointer-events', 'none')
                .text("Cancelar");

            let divHeader = d3.select("body").append("div")

            divHeader.style("position", "absolute")
                .attr("class", "headerDiv")
                .style("top", "50%")
                .style("left", "50%")
                .style("background-color", "Green")
                .style("width", "200")
                .style("height", "30")


        }


        public cargarUsuario() {
            let tUsuario: iUsuario = { id: this.id, nombre: "Sergio", apellidoP: "Garcia", apellidoM: "Salazar", telefono: "7711737058", correo: "sergio@gmail.com", usuario: "sergioGac" }
            this.mapaUsuarios.set(this.id, tUsuario);
            this.tablaUsuarios(); //watch
            this.id++;
            console.log(this.cargarUsuario);
            //this.mapaUsuarios.set(0, { nombre: "Sergio", apellido: "Garcia", telefono: "7711737058", correo: "sergio@uthh.com" });
            // this.mapaUsuarios.set(1, { nombre: "Alex", apellido: "Salazar", telefono: "7711737059", correo: "alex@uthh.edu" });
            // this.mapaUsuarios.set(2, { nombre: "Enrique", apellido: "ss", telefono: "7711737059", correo: "alex@uthh.edu" });
            // this.datosUsuarios = Array.from(this.mapaUsuarios.values());
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
                }
            ),
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
                .selectAll("td")
                .data((d: iUsuario) => Object.values(d))
                .enter()
                .append("td")
                .text((d: string) => d);

            filas.selectAll("td")
                .data((d: iUsuario) => Object.values(d))
                .text((d: string) => d);
            filas.exit()
                .remove();
            tabla.selectAll("tr")
                .selectAll("td")
                .style("border", "1px solid #black")
                .style("padding", "1px");
            tabla.append("tbody");
            this.dibujaTabla();
            //tabla.append("tfoot")
        }
    }
}
