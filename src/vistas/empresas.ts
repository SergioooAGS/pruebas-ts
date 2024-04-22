namespace bootCamp {

	export interface iEmpresas {
		id: number;
		nombre: string;
		correo: string;
		telefono: string;
		rfc: string;
	}

	interface iHeadTabla {
		id: number;
		datos: string;
	}

	enum datosTabla {
		id,
		eliminar,
		editar,
		nombre,
		correo,
		telefono,
		rfc
	}

	export class empresa {
		public svgContenedor: d3.Selection<SVGElement, any, any, any>;
		public div: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>;
		public divEditar: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>;
		public divDelete: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>;
		public divProtect: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>;
		public divAlerta: d3.Selection<HTMLDivElement, unknown, HTMLElement, any>;
		private ipName: d3.Selection<HTMLInputElement, unknown, HTMLElement, any>;
		private ipPhone: d3.Selection<HTMLInputElement, unknown, HTMLElement, any>;
		private ipEmail: d3.Selection<HTMLInputElement, unknown, HTMLElement, any>;
		private ipRfc: d3.Selection<HTMLInputElement, unknown, HTMLElement, any>;
		private tituloVentanaRegistro: d3.Selection<HTMLElement, any, any, any>;
		public inputbuscar: d3.Selection<any, unknown, HTMLElement, any>;
		public inputBuscaTelefono: d3.Selection<any, unknown, HTMLElement, any>;
		public mapaEmpresa: Map<number, iEmpresas>;
		public eliminarMap: number;
		public ascendiente: boolean;
		private flechaOrden: boolean;
		private id = 0;

		constructor() {
			const body = d3.select("body");
			this.svgContenedor = d3.select("#svgContenedor");
			this.id = 0;
			this.mapaEmpresa = new Map<number, iEmpresas>();
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
				.on("change", () => this.svgContenedor)

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

		public NuevaEmpresa() {
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

		public eliminarEmpresa() {

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
				.on("click", (e, d: iEmpresas) => {
					if (this.mapaEmpresa.has(this.eliminarMap)) {
						this.mapaEmpresa.delete(this.eliminarMap);
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
			let email = this.ipEmail.property("value");
			let phone = this.ipPhone.property("value");
			let rfc = this.ipRfc.property("value");

			if (name && email && phone && email && rfc) {
				let tUsuario = <iEmpresas>{ id: this.id, nombre: name, correo: email, telefono: phone, rfc: rfc };
				this.mapaEmpresa.set(this.id, tUsuario);
				this.dibujaFila(null);
				this.id++;
			} else {
				this.divAlerta.style("display", "block");
			}
		}

		public dibujaFila(a: iHeadTabla) {
			let filasT: iEmpresas[] = this.filtrarDatosNombre();
			if (a !== null) {
				filasT = this.ordenarDatos(filasT, a);
			}
			let fila = d3.select("tbody").selectAll("tr")
				.data(filasT, (d: iEmpresas) => d.id);
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
						.on("click", (e, d: iEmpresas) => {
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
						.on("click", (e, d: iEmpresas) => {
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

					return update
				}, (exit) => {
					exit
						.remove()
					return exit;
				});
		}

		public filtrarDatosNombre(): iEmpresas[] {
			let datosEmpresa: iEmpresas[] = Array.from(this.mapaEmpresa.values());
			let nombresBuscador: string = this.inputbuscar.property("value");
			let telefonoBuscador: string = this.inputBuscaTelefono.property("value");
			if (nombresBuscador || telefonoBuscador) {
				datosEmpresa = datosEmpresa.filter(function (value: iEmpresas) {
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
			return datosEmpresa;
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
				.style("background-color", "#cdcdcd")
				.style("border", "1px #black");
			this.fondoProteccion();
			let thead = head.append("thead")
				.classed("thead_Usuario", true)

			const configuraHeaderTable: iHeadTabla[] = [
				{ id: datosTabla.id, datos: "Id" },
				{ id: datosTabla.eliminar, datos: "Eliminar" },
				{ id: datosTabla.editar, datos: "Editar" },
				{ id: datosTabla.nombre, datos: "Nombre" },
				{ id: datosTabla.correo, datos: "Correo" },
				{ id: datosTabla.telefono, datos: "Telefono" },
				{ id: datosTabla.rfc, datos: "RFC" }
			];
			const headerUsuario = d3.select(".thead_Usuario").selectAll("tr")
				.data(configuraHeaderTable, (f: iHeadTabla) => f.datos)
				.join((enter) => {
					let fila = enter.append("th")
						.style("font-family", "cursive")
						.style("font-size", "20px")
						.style("width", "1500px")
						.style("background-color", "#183965")
						.style("padding", "10px")
						.style("text-align", "center")
						.text((f) => f.datos)
						.append("img")
						.attr("src", "images/flecha-abajo.svg")
						.style("width", "20px")
						.style("height", "20px")
						.style("cursor", "pointer")
						.on("click", (e, a: iHeadTabla) => {
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

			let tUsuario: iEmpresas[] = [
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

		public abrirVentanaRegistro(usuario: iEmpresas | null): void {
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

		public limpiarVenatana(): void {
			this.ipName.property("value", "");
			this.ipEmail.property("value", "");
			this.ipPhone.property("value", "");
			this.ipRfc.property("value", "");
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

		public ordenarDatos(arrayMapa: iEmpresas[], a: iHeadTabla): iEmpresas[] {
			this.ascendiente = !this.ascendiente;
			if (a.id === datosTabla.nombre) {
				if (this.ascendiente) {
					arrayMapa.sort((a, b) => b.nombre.localeCompare(a.nombre));
				} else {
					arrayMapa.sort((a, b) => a.nombre.localeCompare(b.nombre));
				}
			} else if (a.id === datosTabla.correo) {
				if (this.ascendiente) {
					arrayMapa.sort((a, b) => b.correo.localeCompare(a.correo));
				} else {
					arrayMapa.sort((a, b) => a.correo.localeCompare(b.correo));
				}
			} else if (a.id === datosTabla.telefono) {
				if (this.ascendiente) {
					arrayMapa.sort((a, b) => b.telefono.localeCompare(a.telefono));
				} else {
					arrayMapa.sort((a, b) => a.telefono.localeCompare(b.telefono));
				}
			} else if (a.id === datosTabla.rfc) {
				if (this.ascendiente) {
					arrayMapa.sort((a, b) => b.rfc.localeCompare(a.rfc));
				} else {
					arrayMapa.sort((a, b) => a.rfc.localeCompare(b.rfc));
				}
			}

			return arrayMapa;
		}
	}
}




