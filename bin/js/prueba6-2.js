"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiendaMov = void 0;
var TiendaMov;
(function (TiendaMov) {
    class Celulares {
        //    public Gygas: boolean;
        constructor(Marca, NumPiece) {
            this.Marca = Marca;
            this.NumPiece = NumPiece;
        }
        VerTelefonos() {
            console.log(`${this.Marca} ${this.NumPiece}`);
        }
    }
    TiendaMov.Celulares = Celulares;
})(TiendaMov || (exports.TiendaMov = TiendaMov = {}));
//# sourceMappingURL=prueba6-2.js.map