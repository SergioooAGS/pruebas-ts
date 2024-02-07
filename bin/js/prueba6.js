"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prueba6_2_1 = require("./prueba6-2");
var TiendaMov2;
(function (TiendaMov2) {
    class Celulares2 {
        constructor(instanciaCel, instanciaPiece) {
            this.instanciaCel = instanciaCel;
            this.instanciaPiece = instanciaPiece;
        }
        VerCel() {
            this.instanciaCel.VerTelefonos();
        }
    }
    TiendaMov2.Celulares2 = Celulares2;
})(TiendaMov2 || (TiendaMov2 = {}));
let Celu = ["Xiaomi Pad 6 SE", "Funda de regalo", "Piezas disponibles:  "];
let Pieces = [56, 67];
const Celulares = new prueba6_2_1.TiendaMov.Celulares("Marca de celular", 10); // Correcto
const Celulares2 = new TiendaMov2.Celulares2(Celulares, Pieces);
Celulares2.VerCel();
//# sourceMappingURL=prueba6.js.map