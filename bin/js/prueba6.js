"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prueba6_2_1 = require("./prueba6-2");
var TiendaMov2;
(function (TiendaMov2) {
    class Celulares2 {
        constructor(instanciaCel) {
            this.instanciaCel = instanciaCel;
        }
        VerCel() {
            this.instanciaCel.VerTelefonos();
        }
    }
    TiendaMov2.Celulares2 = Celulares2;
})(TiendaMov2 || (TiendaMov2 = {}));
let Celu = ["Xiaomi"];
const Stock = 10;
const Celulares = new prueba6_2_1.TiendaMov.Celulares(`Es ${Celu}`, Stock);
const Celulares2 = new TiendaMov2.Celulares2(Celulares);
Celulares2.VerCel();
//# sourceMappingURL=prueba6.js.map