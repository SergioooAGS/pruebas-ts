var TiendaMov;
(function (TiendaMov) {
    class Celulares {
        constructor(Marca, Stock) {
            this.Marca = Marca;
            this.Stock = Stock;
        }
        VerTelefonos() {
            console.log(`${this.Marca}, Piezas restantes: ${this.Stock}`);
        }
    }
    TiendaMov.Celulares = Celulares;
})(TiendaMov || (TiendaMov = {}));
//# sourceMappingURL=prueba6-2.js.map