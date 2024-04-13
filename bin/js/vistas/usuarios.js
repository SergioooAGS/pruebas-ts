var bootCamp;
(function (bootCamp) {
    class Usuarios {
        constructor() {
            this.id = 0;
            const body = d3.select("body");
            this.svgContenedor = d3.select("#svgContenedor");
            //this.svgRegistroUsuario = d3.select("#svgRegistroUsuario");
            this.id = 0;
            this.mapaUsuarios = new Map();
            this.eliminarMap = -1;
            let offnewUser = this.svgContenedor.append("g")
                .on('click', () => {
                this.abrirVentanaRegistro(null);
                this.divProtect.style("display", "block");
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
            let _This = this;
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
                .on("keyup", function () {
                _This.filtrarDatos();
            });
            this.inputbuscar = inputNombre;
            let inputTelefono = this.svgContenedor.append("g");
            inputTelefono.append("foreignObject")
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
                .on("keydown", function () {
                console.log();
            });
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
            this.alertaValidar();
        }
        NuevoUsuario() {
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
                .style("top", "50%")
                .style("left", "50%")
                .style("transform", "translate(-50%, -50%)")
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
                .style("background-color", "#4A4A4A");
            this.tituloVentanaRegistro = divHeader.append("h3")
                .text("Registro Usuarios")
                .style("fill", "white");
            let botonGuardar = this.div.append("div")
                .on("click", () => {
                this.datosUsuarios();
                this.dibujaFila();
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
                .attr('x', '775')
                .attr('y', '585')
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
        eliminarUsuario() {
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
                .on("click", (e, d) => {
                if (this.mapaUsuarios.has(this.eliminarMap)) {
                    this.mapaUsuarios.delete(this.eliminarMap);
                    this.dibujaFila();
                }
                this.eliminarMap = -1;
                this.divDelete.style("display", "none");
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
                this.divDelete.style("display", "none");
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
        datosUsuarios() {
            let name = this.ipName.property("value");
            let apellidoP = this.ipApellidop.property("value");
            let apellidoM = this.ipApellidoM.property("value");
            let phone = this.ipPhone.property("value");
            let email = this.ipEmail.property("value");
            let user = this.ipUser.property("value");
            if (name && apellidoP && apellidoM && apellidoM && phone && email && user) {
                let tUsuario = { id: this.id, nombre: name, apellidoP: apellidoP, apellidoM: apellidoM, telefono: phone, correo: email, usuario: user };
                this.mapaUsuarios.set(this.id, tUsuario);
                this.dibujaFila();
                this.id++;
            }
            else {
                this.divAlerta.style("display", "block");
            }
        }
        //.data(this.mapaUsuarios.values(), (d: iUsuario) => d.id);
        dibujaFila() {
            let filasT = Array.from(this.mapaUsuarios.values());
            let fila = d3.select("tbody").selectAll("tr")
                .data(filasT, (d) => d.id);
            fila.join((enter) => {
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
                    .on("click", (e, d) => {
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
                    .on("click", (e, d) => {
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
                return update;
            }, (exit) => {
                exit
                    .remove();
                return exit;
            });
        }
        filtrarDatos() {
            let datosMapa = Array.from(this.mapaUsuarios.values());
            let nombresBuscador = this.inputbuscar.property("value");
            datosMapa = datosMapa.filter(function (value) {
                return value.nombre.toLowerCase().includes(nombresBuscador.toLowerCase());
            });
            console.log(datosMapa);
        }
        dibujaHead() {
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
                .style("background-color", "#cdcdcd")
                .style("border", "1px #black");
            this.fondoProteccion();
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
        abrirVentanaRegistro(usuario) {
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
        limpiarVenatana() {
            this.ipName.property("value", "");
            this.ipApellidop.property("value", "");
            this.ipApellidoM.property("value", "");
            this.ipPhone.property("value", "");
            this.ipEmail.property("value", "");
            this.ipUser.property("value", "");
        }
        fondoProteccion() {
            this.divProtect = d3.select("body").append("div")
                .style("class", "validarFormulario");
            this.divProtect.style("background", "white")
                .style("transform", "translate(-30%, -50%)")
                .style("width", "1600px")
                .style("height", "820px")
                .style("position", "absolute")
                .style("top", "57%")
                .style("left", "47%")
                .style("display", "none")
                .style("border", "1px solid black")
                .style("opacity", "0.7");
        }
        alertaValidar() {
            this.divAlerta = d3.select("body").append("div")
                .style("background", "white")
                .style("transform", "translate(-30%, -50%)")
                .style("width", "220px")
                .style("height", "120px")
                .style("position", "absolute")
                .style("top", "25%")
                .style("left", "48%")
                .style("display", "none")
                .style("border", "1px solid black");
            let tituloValidar = this.divAlerta.append("h1")
                .style("text-align", "center")
                .style("font-family", "cursive")
                .style("padding", "5%")
                .style("font-size", "19px");
            tituloValidar.text("¡No puedes agregar campos vacios!");
            let botonCancel = this.divAlerta.append("div")
                .on("click", () => {
                this.divAlerta.style("display", "none");
                this.divProtect.style("display", "none");
            });
            botonCancel.style("position", "absolute")
                .style("top", "65%")
                .style("left", "35%")
                .style("background-color", "green")
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
                .text("Aceptar");
        }
    }
    bootCamp.Usuarios = Usuarios;
})(bootCamp || (bootCamp = {}));
