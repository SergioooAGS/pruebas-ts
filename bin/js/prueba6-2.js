"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiendaMov = void 0;
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
})(TiendaMov || (exports.TiendaMov = TiendaMov = {}));
//# sourceMappingURL=prueba6-2.js.map