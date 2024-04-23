namespace bootCamp {
    export interface iUsuario {
        id: number;
        nombre: string;
        apellidoP: string;
        apellidoM: string;
        telefono: string;
        correo: string;
        usuario: string;
    }

    interface iTituloTabla {
        id: number;
        titulo: string;
    }

    enum headerDatos {
        id,
        eliminar,
        editar,
        Nombre,
        ApellidoPaterno,
        ApellidoMaterno,
        Telefono,
        Correo,
        Usuario
    }

    export class Usuarios {
        public svgContenedor: d3.Selection<SVGElement, any, any, any>;
        public div: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>;
        public divEditar: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>;
        public divDelete: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>;
        public divProtect: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>;
        public divAlerta: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>;
        private ipName: d3.Selection<HTMLInputElement, unknown, HTMLElement, any>;
        private ipApellidop: d3.Selection<HTMLInputElement, unknown, HTMLElement, any>;
        private ipApellidoM: d3.Selection<HTMLInputElement, unknown, HTMLElement, any>;
        private ipPhone: d3.Selection<HTMLInputElement, unknown, HTMLElement, any>;
        private ipEmail: d3.Selection<HTMLInputElement, unknown, HTMLElement, any>;
        private ipUser: d3.Selection<HTMLInputElement, unknown, HTMLElement, any>;
        //private filtro: d3.Selection<HTMLInputElement, unknown, HTMLElement, any>;
        // private idNombre: string;
        // private idApellidop: string;
        // private idApellidoM: string;
        // private idTelefono: string;
        // private idCorreo: string;
        // private idUsuario: string;

        private tituloVentanaRegistro: d3.Selection<HTMLElement, any, any, any>;
        public inputbuscar: d3.Selection<any, unknown, HTMLElement, any>;
        public inputBuscaTelefono: d3.Selection<any, unknown, HTMLElement, any>;
        public mapaUsuarios: Map<number, iUsuario>;
        public eliminarMap: number;
        public ascendiente: boolean;
        private flechaOrden: boolean;
        private id = 0;

        constructor() {
            const body = d3.select("body");
            this.svgContenedor = d3.select("#svgContenedor");
            //this.svgRegistroUsuario = d3.select("#svgRegistroUsuario");
            this.id = 0;
            this.mapaUsuarios = new Map<number, iUsuario>();
            this.eliminarMap = -1;
            this.ascendiente = true;
            this.flechaOrden = false;

            let AgregarUsuario = this.svgContenedor.append("g")
                .on('click', () => {
                    this.abrirVentanaRegistro(null);
                    this.divProtect.style("display", "block");
                });
            AgregarUsuario.append("rect")
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

            AgregarUsuario.append("text")
                .attr("y", "48px")
                .attr("x", "1460px")
                .attr("fill", "white")
                .attr("font-family", "cursive")
                .style("pointer-events", "none")
                .text("Agregar");

            let inputNombre = this.svgContenedor.append("g")
                .append("foreignObject")
                .style("width", "180px")
                .style("height", "30px")
                .style("x", "800px")
                .style("y", "30")
                .style("position", "absolute")
                .style("top", "50px")
                .append("xhtml:input")
                .style("class", "text")
                .attr("type", "text")
                .attr("placeholder", "Nombre")
                .style("font-size", "15px")
                .style("font-family", "cursive")
                .style("width", "180px")
                .style("height", "30px")
                .style("font-family", "cursive")
                .style("border-color", "black")
                .on("keyup", () => {
                    this.dibujaFila(null);
                });
            this.inputbuscar = inputNombre;

            let inputTelefono = this.svgContenedor.append("g")
                .append("foreignObject")
                .style("width", "180px")
                .style("height", "30px")
                .style("x", "1030px")
                .style("y", "30")
                .style("position", "absolute")
                .style("top", "50px")
                .append("xhtml:input")
                .style("class", "text")
                .attr("type", "text")
                .attr("placeholder", "Telefono")
                .style("font-size", "15px")
                .style("font-family", "cursive")
                .style("width", "180px")
                .style("height", "30px")
                .style("font-family", "cursive")
                .style("border-color", "black")
                .on("keyup", () => {
                    this.dibujaFila(null);
                });
            this.inputBuscaTelefono = inputTelefono;


            let tituloUsuario = this.svgContenedor.append("g");
            tituloUsuario.append("foreignObject")
                .text("Usuarios")
                .style("width", "220px")
                .style("height", "30px")
                .style("x", "50")
                .style("y", "20")
                .style("color", "black")
                .style("position", "absolute")
                .style("font-size", "27px")
                .style("font-family", "cursive")
                .style("top", "50px")
                .style("left", "0");




            this.dibujaHead();
            this.NuevoUsuario();
            this.eliminarUsuario();
            this.alertaValidar();
        }

        public NuevoUsuario() {


            this.div = d3.select("body")
                .append("div")
                .attr("class", "nuevoUsuario")
                .style("font-family", "cursive")
                .style("text-align", "center")
                .style("color", "white")
                .style("box-shadow", "5px 5px 5px black")
                .style("display", "none");

            this.div.append("text")
                .text("Nombre")
                .style("color", "black");

            this.ipName = this.div.append("input")
                .classed("name", true)
                .attr("type", "text")
                .attr("placeholder", "")
                .style("border-color", "black");

            this.div.append("text")
                .text("Apellido Paterno")
                .style("color", "black");

            this.ipApellidop = this.div.append("input")
                .classed("apellidoP", true)
                .attr("type", "text")
                .attr("placeholder", "")
                .style("border-color", "black");

            this.div.append("text")
                .text("Apellido Materno")
                .style("color", "black");

            this.ipApellidoM = this.div.append("input")
                .classed("apellidoM", true)
                .attr("type", "text")
                .attr("placeholder", "")
                .style("border-color", "black");

            this.div.append("text")
                .text("Telefono")
                .style("color", "black");

            this.ipPhone = this.div.append("input")
                .classed("phone", true)
                .attr("type", "text")
                .attr("placeholder", "")
                .style("border-color", "black");

            this.div.append("text")
                .text("Correo")
                .style("color", "black");

            this.ipEmail = this.div.append("input")
                .classed("email", true)
                .attr("type", "text")
                .attr("placeholder", "")
                .style("border-color", "black");

            this.div.append("text")
                .text("Usuario")
                .style("color", "black");

            this.ipUser = this.div.append("input")
                .classed("user", true)
                .attr("type", "text")
                .attr("placeholder", "")
                .style("border-color", "black");

            this.div.style("position", "absolute")
                .style("margin", "2px")
                .style("top", "30%")
                .style("left", "40%")
                .style("background-color", "white")
                .style("padding", "45px")
                .style("border", "1px solid black")
                .style("width", "280px")
                .style("height", "400px")
                .style("z-index", 20)
                .style("text-aling", "center");

            let divHeader = this.div.append("div")
                .attr("class", "headerDiv")
                .style("pointer-events", "none")
                .style("width", "278px")
                .style("height", "30px");


            divHeader.style("position", "absolute")
                .style("top", "0%")
                .style("left", "0%")
                .style("background-color", "#0f2547");

            this.tituloVentanaRegistro = divHeader.append("h3")
                .text("Registro Usuarios")
                .style("fill", "white");

            let botonGuardar = this.div.append("div")
                .on("click", () => {
                    this.datosUsuarios();
                    this.div.style("display", "none");
                    this.divProtect.style("display", "none");
                });
            botonGuardar.style("position", "absolute")
                .style("top", "83%")
                .style("left", "24%")
                .style("background-color", "green")
                .style("padding", "4px")
                .style("border-radius", "10px");

            botonGuardar.append("text")
                .style("stroke", "black")
                .style("stroke-width", "2px")
                .attr("x", "775")
                .attr("y", "585")
                .attr("font-family", "cursive")
                .style("cursor", "pointer")
                .text("Guardar");

            let botonCancelar = this.div.append("div")
                .on('click', () => {
                    this.div.style("display", "none");
                    this.divProtect.style("display", "none");
                });
            botonCancelar.style("position", "absolute")
                .style("top", "83%")
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
                .style("top", "0%")
                .style("right", "0%")
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
                    this.div.style("display", "none");
                    this.divProtect.style("display", "none");
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
                .style("top", "35%")
                .style("left", "40%")
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
                .on("click", (e, d: iUsuario) => {
                    if (this.mapaUsuarios.has(this.eliminarMap)) {
                        this.mapaUsuarios.delete(this.eliminarMap);
                        this.dibujaFila(null);
                    }
                    this.eliminarMap = -1;
                    this.divDelete.style("display", "none")
                    this.divProtect.style("display", "none");
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
                .on("click", () => {
                    this.divDelete.style("display", "none")
                    this.divProtect.style("display", "none");
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
            let name = this.ipName.property("value");
            let apellidoP = this.ipApellidop.property("value");
            let apellidoM = this.ipApellidoM.property("value");
            let phone = this.ipPhone.property("value");
            let email = this.ipEmail.property("value");
            let user = this.ipUser.property("value");

            if (name && apellidoP && apellidoM && apellidoM && phone && email && user) {
                let tUsuario = <iUsuario>{ id: this.id, nombre: name, apellidoP: apellidoP, apellidoM: apellidoM, telefono: phone, correo: email, usuario: user };
                this.mapaUsuarios.set(this.id, tUsuario);
                this.dibujaFila(null);
                this.id++;
            } else {
                this.divAlerta.style("display", "block");
            }
        }

        public dibujaFila(a: iTituloTabla) {
            let filasT: iUsuario[] = this.filtrarDatosNombre();
            if (a !== null) {
                filasT = this.ordenarDatos(filasT, a);
            }
            let fila = d3.select("tbody").selectAll("tr")
                .data(filasT, (d: iUsuario) => d.id);
            fila.join(
                (enter) => {
                    let row = enter.append("tr")
                        .style("text-align", "center")
                        .style("font-family", "cursive")
                        .style("font-size", "20px")
                        .style("background-color", (e, i) => i % 2 === 0 ? "silver" : "#cacaca");

                    row.append("td")
                        .text((d) => d.id);

                    row.append("td")
                        .classed("deleteUser", true)
                        .append("img")
                        .attr("src", "images/traash.svg")
                        .attr("width", "70")
                        .attr("height", "70")
                        .attr("x", "60")
                        .attr("y", "50")
                        .style("cursor", "pointer")
                        .on("click", (e, d: iUsuario) => {
                            this.divDelete.style("display", "block");
                            this.divProtect.style("display", "block");
                            this.eliminarMap = d.id;
                        });

                    row.append("td")
                        .append("img")
                        .attr("src", "images/editar-d.svg")
                        .attr("width", "60")
                        .attr("height", "60")
                        .attr("x", "80")
                        .attr("y", "50")
                        .style("cursor", "pointer")
                        .on("click", (e, d: iUsuario) => {
                            this.abrirVentanaRegistro(d);
                            this.divProtect.style("display", "block");
                        });

                    row.append("td")
                        .classed("nombreUsuario", true)
                        .text((d) => d.nombre);

                    row.append("td")
                        .classed("apellidoP-usuario", true)
                        .text((d) => d.apellidoP);

                    row.append("td")
                        .classed("apellidoM-usuario", true)
                        .text((d) => d.apellidoM);

                    row.append("td")
                        .classed("telefono-usuario", true)
                        .text((d) => d.telefono);

                    row.append("td")
                        .classed("correo-usuario", true)
                        .text((d) => d.correo);

                    row.append("td")
                        .classed("usuario-user", true)
                        .text((d) => d.usuario);

                    return row;
                }, (update) => {
                    update
                        .style("background-color", (e, i) => i % 2 === 0 ? "silver" : "#cacaca")
                        .select(".nombreUsuario").text((d) => d.nombre)
                        .select(".apellidoP-usuario").text((d) => d.apellidoP)
                        .select(".apellidoM-usuario").text((d) => d.apellidoM)
                        .select(".telefono-usuario").text((d) => d.telefono)
                        .select(".correo-usuario").text((d) => d.correo)
                        .select(".usuario-user").text((d) => d.usuario);

                    return update
                }, (exit) => {
                    exit
                        .remove()
                    return exit;
                });
        }

        public filtrarDatosNombre(): iUsuario[] {
            let datosMapa: iUsuario[] = Array.from(this.mapaUsuarios.values());
            let nombresBuscador: string = this.inputbuscar.property("value");
            let telefonoBuscador: string = this.inputBuscaTelefono.property("value");
            if (nombresBuscador || telefonoBuscador) {
                datosMapa = datosMapa.filter(function (value: iUsuario) {
                    let validarNombre: boolean = true;
                    let validarTelefono: boolean = true;
                    if (nombresBuscador) {
                        validarNombre = value.nombre.toLowerCase().includes(nombresBuscador.toLowerCase());
                    } if (telefonoBuscador) {
                        validarTelefono = value.telefono.toLowerCase().includes(telefonoBuscador.toLowerCase());
                    }
                    return validarNombre && validarTelefono;
                });
            }
            return datosMapa;
        }

        public dibujaHead() {
            let tablaGrupo = this.svgContenedor.append("g")
                .attr("transform", "translate(50, 100)");
            let head = tablaGrupo.append("foreignObject")
                .attr("class", "tabla")
                .style("overflow", "auto")
                .style("background-color", "#cacaca ")
                .style("width", 1500)
                .style("height", 900)
                .append("xhtml:table")
                .style("color", "white")
                .style("background-color", "#cacaca")
                .style("border", "1px #black");
            this.fondoProteccion();
            head.append("thead")
                .classed("thead_Usuario", true)

            const configuraHeaderTable: iTituloTabla[] = [
                { id: headerDatos.id, titulo: "Id" },
                { id: headerDatos.eliminar, titulo: "Eliminar" },
                { id: headerDatos.editar, titulo: "Editar" },
                { id: headerDatos.Nombre, titulo: "Nombre" },
                { id: headerDatos.ApellidoPaterno, titulo: "Apellido Paterno" },
                { id: headerDatos.ApellidoMaterno, titulo: "Apellido Materno" },
                { id: headerDatos.Telefono, titulo: "Telefono" },
                { id: headerDatos.Correo, titulo: "Correo" },
                { id: headerDatos.Usuario, titulo: "Usuario" }
            ];
            d3.select(".thead_Usuario").selectAll("tr")
                .data(configuraHeaderTable, (f: iTituloTabla) => f.titulo)
                .join((enter) => {
                    let fila = enter.append("th")
                        .style("font-family", "cursive")
                        .style("font-size", "20px")
                        .style("width", "1500px")
                        .style("background-color", "#183965")
                        .style("padding", "10px")
                        .style("text-align", "center")
                        .text((f) => f.titulo)
                    fila.filter((f) => f.titulo !== "Eliminar" && f.titulo !== "Editar")
                        .append("img")
                        .attr("src", "images/flecha-abajo.svg")
                        .style("width", "20px")
                        .style("height", "20px")
                        .style("cursor", "pointer")
                        .on("click", (e, a: iTituloTabla) => {
                            console.log(a);
                            let elementTarget = d3.select(e.target);
                            this.dibujaFila(a);
                            if (this.ascendiente) {
                                elementTarget.attr("src", "images/flecha-arriba.svg");
                            } else {
                                elementTarget.attr("src", "images/flecha-abajo.svg");
                            }
                        });
                    return fila;
                });


            head.append("tbody");

            let tUsuario: iUsuario[] = [
                { id: 0, nombre: "Aergio", apellidoP: "arcia", apellidoM: "Autento", telefono: "7711737058", correo: "sergio@gmail.com", usuario: "sergioGac" },
                { id: 1, nombre: "Blejandro", apellidoP: "balazar", apellidoM: "Xavier", telefono: "8832456743", correo: "ale@gmail.com", usuario: "aleS" },
                { id: 2, nombre: "Cay", apellidoP: "Daz", apellidoM: "Lara", telefono: "991243212", correo: "Elvaro@gmail.com", usuario: "halvaroA" },
                { id: 3, nombre: "Dar", apellidoP: "Zalvaro", apellidoM: "Martinez", telefono: "991243212", correo: "Xlvaro@gmail.com", usuario: "YalvaroA" }
            ];
            for (let u of tUsuario) {
                this.mapaUsuarios.set(u.id, u);
            }
            this.dibujaFila(null);
        }

        public abrirVentanaRegistro(usuario: iUsuario | null): void {
            this.limpiarVenatana();
            this.div.style("display", "block");
            this.tituloVentanaRegistro.text(usuario ? "Editar usuario" : "Registro Usuario");
            if (usuario) {
                this.id = usuario.id;
                this.ipName.property("value", usuario.nombre);
                this.ipApellidop.property("value", usuario.apellidoP);
                this.ipApellidoM.property("value", usuario.apellidoM);
                this.ipPhone.property("value", usuario.telefono);
                this.ipEmail.property("value", usuario.correo);
                this.ipUser.property("value", usuario.usuario);
            }
        }

        public limpiarVenatana(): void {
            this.ipName.property("value", "");
            this.ipApellidop.property("value", "");
            this.ipApellidoM.property("value", "");
            this.ipPhone.property("value", "");
            this.ipEmail.property("value", "");
            this.ipUser.property("value", "");
        }

        public fondoProteccion() {
            this.divProtect = d3.select("body").append("div")
                .style("class", "validarFormulario");
            this.divProtect.style("background", "#183965")
                .style("width", "1950px")
                .style("height", "950px")
                .style("display", "none")
                .style("border", "1px solid black")
                .style("opacity", "0.7");
        }

        public alertaValidar() {
            this.divAlerta = d3.select("body").append("div")
                .style("background-color", "white")
                .style("width", "220px")
                .style("height", "120px")
                .style("position", "absolute")
                .style("top", "30%")
                .style("left", "40%")
                .style("display", "none")
                .style("border", "1px solid black");

            this.divAlerta.append("div")
                .style("background", "white")
                .style("width", "1900px")
                .style("height", "1020px")
                .style("position", "absolute")
                .style("top", "0%")
                .style("left", "0%")
                .style("display", "none")
                .style("border", "1px solid black")
                .style("opacity", "0.7");

            let tituloValidar = this.divAlerta.append("h1")
                .style("text-align", "center")
                .style("font-family", "cursive")
                .style("padding", "5%")
                .style("font-size", "19px");

            tituloValidar.text("¡No puedes agregar campos vacios!");

            let botonAcepta = this.divAlerta.append("div")
                .on("click", () => {
                    this.divAlerta.style("display", "none");
                    this.divProtect.style("display", "block");
                    this.div.style("display", "block");
                });

            botonAcepta.style("position", "absolute")
                .style("top", "65%")
                .style("left", "35%")
                .style("background-color", "green")
                .style("padding", "4px")
                .style("border-radius", "10px");

            botonAcepta.append("text")
                .style("stroke", "black")
                .style("stroke-width", "2px")
                .style("x", "775")
                .style("y", "585")
                .style("color", "white")
                .style("font-family", "cursive")
                .style("cursor", "pointer")
                .text("Aceptar");
        }

        public ordenarDatos(arrayMapa: iUsuario[], a: iTituloTabla): iUsuario[] {
            this.ascendiente = !this.ascendiente;
            if (a.id === headerDatos.Nombre) {
                if (this.ascendiente) {
                    arrayMapa.sort((a, b) => b.nombre.localeCompare(a.nombre));
                } else {
                    arrayMapa.sort((a, b) => a.nombre.localeCompare(b.nombre));
                }
            } else if (a.id === headerDatos.ApellidoPaterno) {
                if (this.ascendiente) {
                    arrayMapa.sort((a, b) => b.apellidoP.localeCompare(a.apellidoP));
                } else {
                    arrayMapa.sort((a, b) => a.apellidoP.localeCompare(b.apellidoP));
                }
            } else if (a.id === headerDatos.ApellidoMaterno) {
                if (this.ascendiente) {
                    arrayMapa.sort((a, b) => b.apellidoM.localeCompare(a.apellidoM));
                } else {
                    arrayMapa.sort((a, b) => a.apellidoM.localeCompare(b.apellidoM));
                }
            } else if (a.id === headerDatos.Telefono) {
                if (this.ascendiente) {
                    arrayMapa.sort((a, b) => b.telefono.localeCompare(a.telefono));
                } else {
                    arrayMapa.sort((a, b) => a.telefono.localeCompare(b.telefono));
                }
            } else if (a.id === headerDatos.Correo) {
                if (this.ascendiente) {
                    arrayMapa.sort((a, b) => b.correo.localeCompare(a.correo));
                } else {
                    arrayMapa.sort((a, b) => a.correo.localeCompare(b.correo));
                }
            } else if (a.id === headerDatos.Usuario) {
                if (this.ascendiente) {
                    arrayMapa.sort((a, b) => b.usuario.localeCompare(a.usuario));
                } else {
                    arrayMapa.sort((a, b) => a.usuario.localeCompare(b.usuario));
                }
            }

            return arrayMapa;
        }
    }
} 
