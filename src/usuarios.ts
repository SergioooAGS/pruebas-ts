namespace AppHolaMundo {
    export interface tbUser {
        //agregar: SVGElement;
        //editar: SVGElement;
        //eliminar: SVGElement;
        nombre: string;
        apellido: string;
        telefono: string;
        correo: string;
    }

    export class P3 {
        public svgContenedor: d3.Selection<SVGElement, any, any, any>;
        mapaUsuarios: Map<number, tbUser>;
        datosUsuarios: tbUser[];

        constructor() {
            this.svgContenedor = d3.select("#svgContenedor");
            this.mapaUsuarios = new Map<number, tbUser>();
            this.datosUsuarios = [];
            this.loadUser();
            this.tableUsers();
        }

        public loadUser() {
            this.mapaUsuarios.set(0, { nombre: "Sergio", apellido: "Garcia", telefono: "7711737058", correo: "sergio@uthh.com" });
            this.mapaUsuarios.set(1, { nombre: "Alex", apellido: "Salazar", telefono: "7711737059", correo: "alex@uthh.edu" });
            this.datosUsuarios = Array.from(this.mapaUsuarios.values());
        }

        public tableUsers() {
            const tablaGroup = this.svgContenedor.append("g")
                .attr("transform", "translate(50, 50)");


            let tabla = tablaGroup.append("foreignObject")
                .attr("width", 1200)
                .attr("height", 900)
                .append("xhtml:table")
                .attr("border", 2)
                .style("background-color", "")
                .style("border", "1px solid #grey");

            tabla.append("thead")
                .append("tr")
                .selectAll("th")
                .data(["Nombre", "Apellido", "Telefono", "Correo"])
                .enter()
                .append("th")
                .text((d: string) => d)
                .attr("font-family", "cursive")
                .attr("class", "tHead");

            let filas = tabla.selectAll("tr.usuario")
                .data(this.datosUsuarios, (d: tbUser) => d.correo);

            filas.enter()
                .append("tr")
                .attr("class", "usuario")
                .selectAll("td")
                .data((d: tbUser) => Object.values(d))
                .enter()
                .append("td")
                .text((d: string) => d);

            filas.selectAll("td")
                .data((d: tbUser) => Object.values(d))
                .text((d: string) => d);

            filas.exit().remove();

            tabla.selectAll("tr")
                .selectAll("td")
                .style("border", "10px solid #black")
                .style("padding", "10px");
        }
    }
}
