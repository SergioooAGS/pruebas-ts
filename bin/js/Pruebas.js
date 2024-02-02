var agencia;
(function (agencia) {
    function inicio() {
        class Carro {
            constructor(nombre, año) {
                this.nombre = nombre;
                this.año = año;
            }
            Marcaa() {
                console.log(`Mi marca es ${this.nombre} y soy del  ${this.año}`);
            }
        }
    }
    agencia.inicio = inicio;
})(agencia || (agencia = {}));
//# sourceMappingURL=Pruebas.js.map