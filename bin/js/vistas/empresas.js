var bootCamp;
(function (bootCamp) {
    let datosTabla;
    (function (datosTabla) {
        datosTabla[datosTabla["id"] = 0] = "id";
        datosTabla[datosTabla["eliminar"] = 1] = "eliminar";
        datosTabla[datosTabla["editar"] = 2] = "editar";
        datosTabla[datosTabla["nombre"] = 3] = "nombre";
        datosTabla[datosTabla["correo"] = 4] = "correo";
        datosTabla[datosTabla["telefono"] = 5] = "telefono";
        datosTabla[datosTabla["rfc"] = 6] = "rfc";
    })(datosTabla || (datosTabla = {}));
    let estadoDatos;
    (function (estadoDatos) {
        estadoDatos[estadoDatos["ascendente"] = 0] = "ascendente";
        estadoDatos[estadoDatos["descendente"] = 1] = "descendente";
        estadoDatos[estadoDatos["normal"] = 2] = "normal";
    })(estadoDatos || (estadoDatos = {}));
    class empresa {
        constructor() {
            this.ordenamientoDatos = estadoDatos.normal;
            this.id = 0;
            const body = d3.select("body");
            this.svgContenedor = d3.select("#svgContenedor");
            this.id = 0;
            this.mapaEmpresa = new Map();
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
                .style("x", "1453")
                .style("y", "25")
                .style("rx", "10")
                .style("ry", "10")
                .style("fill", "green")
                .style("position", "absolute")
                .style("width", "80px")
                .style("height", "40px")
                .style("cursor", "pointer");
            AgregarUsuario.append("text")
                .attr("y", "55px")
                .attr("x", "1467px")
                .attr("fill", "white")
                .attr("font-family", "cursive")
                .style("pointer-events", "none")
                .text("Añadir");
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
                .attr("placeholder", "Nombre de la empresa")
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
                .attr("placeholder", "Telefono de la empresa")
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
            let inpuSelect = this.svgContenedor.append("select")
                .attr("id", "selection")
                .on("change", () => this.svgContenedor);
            let tituloUsuario = this.svgContenedor.append("g");
            tituloUsuario.append("foreignObject")
                .text("Empresas")
                .style("width", "220px")
                .style("height", "30px")
                .style("x", "50")
                .style("y", "20")
                .style("position", "absolute")
                .style("font-size", "25px")
                .style("font-family", "cursive")
                .style("top", "50px")
                .style("left", "0");
            this.dibujaHead();
            this.NuevaEmpresa();
            this.eliminarEmpresa();
            this.alertaValidar();
        }
        NuevaEmpresa() {
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
                .text("Correo")
                .style("color", "black");
            this.ipEmail = this.div.append("input")
                .classed("email", true)
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
                .text("RFC")
                .style("color", "black");
            this.ipRfc = this.div.append("input")
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
            let divHeader2 = this.div.append("div")
                .attr("class", "headerDiv")
                .style("pointer-events", "none")
                .style("width", "278px")
                .style("height", "30px");
            divHeader2.style("position", "absolute")
                .style("top", "0%")
                .style("left", "0%")
                .style("background-color", "#183965");
            this.tituloVentanaRegistro = divHeader2.append("h3")
                .text("Registrooooooo")
                .style("fill", "white");
            let botonGuardar = this.div.append("div")
                .on("click", () => {
                this.datosUsuarios();
                this.div.style("display", "none");
                this.divProtect.style("display", "none");
            });
            botonGuardar.style("position", "absolute")
                .style("top", "63%")
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
                .style("top", "63%")
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
        eliminarEmpresa() {
            this.divDelete = d3.select("body")
                .append("div")
                .attr("class", "eliminarEmpresa")
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
                .text("¿Deseas eliminar esta empresa?");
            let botonEliminar = this.divDelete.append("div")
                .on("click", (e, d) => {
                if (this.mapaEmpresa.has(this.eliminarMap)) {
                    this.mapaEmpresa.delete(this.eliminarMap);
                    this.dibujaFila(null);
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
            let email = this.ipEmail.property("value");
            let phone = this.ipPhone.property("value");
            let rfc = this.ipRfc.property("value");
            if (name && email && phone && email && rfc) {
                let tUsuario = { id: this.id, nombre: name, correo: email, telefono: phone, rfc: rfc };
                this.mapaEmpresa.set(this.id, tUsuario);
                this.dibujaFila(null);
                this.id++;
            }
            else {
                this.divAlerta.style("display", "block");
            }
        }
        dibujaFila(a) {
            let filasT = this.filtrarDatosNombre();
            if (a !== null) {
                filasT = this.ordenarDatos(filasT, a);
            }
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
                    .classed("correo-usuario", true)
                    .text((d) => d.correo);
                row.append("td")
                    .classed("telefono-usuario", true)
                    .text((d) => d.telefono);
                row.append("td")
                    .classed("rfc-empresa", true)
                    .text((d) => d.rfc);
                return row;
            }, (update) => {
                update
                    .style("background-color", (e, i) => i % 2 === 0 ? "silver" : "#cacaca")
                    .select(".nombreUsuario").text((d) => d.nombre)
                    .select(".correo-usuario").text((d) => d.correo)
                    .select(".telefono-usuario").text((d) => d.telefono)
                    .select(".rfc-empresa").text((d) => d.rfc);
                return update;
            }, (exit) => {
                exit
                    .remove();
                return exit;
            });
        }
        filtrarDatosNombre() {
            let datosEmpresa = Array.from(this.mapaEmpresa.values());
            let nombresBuscador = this.inputbuscar.property("value");
            let telefonoBuscador = this.inputBuscaTelefono.property("value");
            if (nombresBuscador || telefonoBuscador) {
                datosEmpresa = datosEmpresa.filter(function (value) {
                    let validarNombre = true;
                    let validarTelefono = true;
                    if (nombresBuscador) {
                        validarNombre = value.nombre.toLowerCase().includes(nombresBuscador.toLowerCase());
                    }
                    if (telefonoBuscador) {
                        validarTelefono = value.telefono.toLowerCase().includes(telefonoBuscador.toLowerCase());
                    }
                    return validarNombre && validarTelefono;
                });
            }
            return datosEmpresa;
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
            let thead = head.append("thead")
                .classed("thead_Usuario", true);
            const configuraHeaderTable = [
                { id: datosTabla.id, datos: "Id" },
                { id: datosTabla.eliminar, datos: "Eliminar" },
                { id: datosTabla.editar, datos: "Editar" },
                { id: datosTabla.nombre, datos: "Nombre" },
                { id: datosTabla.correo, datos: "Correo" },
                { id: datosTabla.telefono, datos: "Telefono" },
                { id: datosTabla.rfc, datos: "RFC" }
            ];
            d3.select(".thead_Usuario").selectAll("tr")
                .data(configuraHeaderTable, (f) => f.datos)
                .join((enter) => {
                let fila = enter.append("th")
                    .style("font-family", "cursive")
                    .style("font-size", "20px")
                    .style("width", "1500px")
                    .style("background-color", "#183965")
                    .style("padding", "10px")
                    .style("text-align", "center")
                    .style("cursor", "pointer")
                    .text((f) => f.datos)
                    .on("click", (e, a) => {
                    if (this.ordenamientoDatos == estadoDatos.normal) {
                        this.ordenamientoDatos = estadoDatos.ascendente;
                    }
                    else if (this.ordenamientoDatos == estadoDatos.ascendente) {
                        this.ordenamientoDatos = estadoDatos.descendente;
                    }
                    else if (this.ordenamientoDatos == estadoDatos.descendente) {
                        this.ordenamientoDatos = estadoDatos.normal;
                    }
                    console.log(a);
                    this.dibujaFila(a);
                    let arrow = d3.select(e.target).select("img");
                    if (this.ordenamientoDatos == estadoDatos.ascendente) {
                        arrow.attr("src", "images/flecha-abajo.svg");
                    }
                    else if (this.ordenamientoDatos == estadoDatos.descendente) {
                        arrow.attr("src", "images/flecha-arriba.svg");
                    }
                    else if (this.ordenamientoDatos == estadoDatos.normal) {
                        arrow.attr("src", "images/img1.png");
                    }
                })
                    .filter((f) => f.datos !== "Eliminar" && f.datos !== "Editar")
                    .append("img")
                    .attr("src", "images/img1.png")
                    .style("width", "20px")
                    .style("height", "20px");
                return fila;
            });
            head.append("tbody");
            let tUsuario = [
                { id: 0, nombre: "Coca", correo: "coca@gmail.com", telefono: "88", rfc: "123" },
                { id: 1, nombre: "Hp", correo: "hp@gmail.com", telefono: "99", rfc: "456" },
                { id: 2, nombre: "Dell", correo: "dell@gmail.com", telefono: "11", rfc: "789" },
                { id: 3, nombre: "Asus", correo: "asus@gmail.com", telefono: "22", rfc: "1011" }
            ];
            for (let u of tUsuario) {
                this.mapaEmpresa.set(u.id, u);
            }
            this.dibujaFila(null);
        }
        abrirVentanaRegistro(usuario) {
            this.limpiarVenatana();
            this.div.style("display", "block");
            this.tituloVentanaRegistro.text(usuario ? "Editar empresa" : "Registro Empresa");
            if (usuario) {
                this.id = usuario.id;
                this.ipName.property("value", usuario.nombre);
                this.ipEmail.property("value", usuario.correo);
                this.ipPhone.property("value", usuario.telefono);
                this.ipRfc.property("value", usuario.rfc);
            }
        }
        limpiarVenatana() {
            this.ipName.property("value", "");
            this.ipEmail.property("value", "");
            this.ipPhone.property("value", "");
            this.ipRfc.property("value", "");
        }
        fondoProteccion() {
            this.divProtect = d3.select("body").append("div")
                .style("class", "validarFormulario");
            this.divProtect.style("background", "#183965")
                .style("width", "1950px")
                .style("height", "950px")
                .style("display", "none")
                .style("border", "1px solid black")
                .style("opacity", "0.7");
        }
        alertaValidar() {
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
                .style("font-size", "19px")
                .style("color", "red");
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
        ordenarDatos(arrayMapa, a) {
            this.ascendiente = !this.ascendiente;
            let ArregloDefault = JSON.parse(JSON.stringify(arrayMapa));
            if (a.id === datosTabla.nombre) {
                if (this.ordenamientoDatos == estadoDatos.ascendente) {
                    arrayMapa.sort((a, b) => a.nombre.localeCompare(b.nombre));
                }
                else if (this.ordenamientoDatos == estadoDatos.descendente) {
                    arrayMapa.sort((a, b) => b.nombre.localeCompare(a.nombre));
                }
                else if (this.ordenamientoDatos == estadoDatos.normal) {
                    arrayMapa = ArregloDefault;
                }
            }
            else if (a.id === datosTabla.correo) {
                if (this.ordenamientoDatos == estadoDatos.ascendente) {
                    arrayMapa.sort((a, b) => a.correo.localeCompare(b.correo));
                }
                else if (this.ordenamientoDatos == estadoDatos.descendente) {
                    arrayMapa.sort((a, b) => b.correo.localeCompare(a.correo));
                }
                else if (this.ordenamientoDatos == estadoDatos.normal) {
                    arrayMapa = ArregloDefault;
                }
            }
            else if (a.id === datosTabla.telefono) {
                if (this.ordenamientoDatos == estadoDatos.ascendente) {
                    arrayMapa.sort((a, b) => a.telefono.localeCompare(b.telefono));
                }
                else if (this.ordenamientoDatos == estadoDatos.descendente) {
                    arrayMapa.sort((a, b) => b.telefono.localeCompare(a.telefono));
                }
                else if (this.ordenamientoDatos == estadoDatos.normal) {
                    arrayMapa = ArregloDefault;
                }
            }
            else if (a.id === datosTabla.rfc) {
                if (this.ordenamientoDatos == estadoDatos.ascendente) {
                    arrayMapa.sort((a, b) => b.rfc.localeCompare(a.rfc));
                }
                else if (this.ordenamientoDatos == estadoDatos.descendente) {
                    arrayMapa.sort((a, b) => a.rfc.localeCompare(b.rfc));
                }
                else if (this.ordenamientoDatos == estadoDatos.normal) {
                    arrayMapa = ArregloDefault;
                }
            }
            return arrayMapa;
        }
    }
    bootCamp.empresa = empresa;
})(bootCamp || (bootCamp = {}));
