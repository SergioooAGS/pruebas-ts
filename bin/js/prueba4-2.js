"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prueba4_1 = require("./prueba4");
var ventana4;
(function (ventana4) {
    class PruebaDos {
        constructor(instanciaPruebaUno) {
            this.instanciaPruebaUno = instanciaPruebaUno;
        }
        llamarFuncionPruebaUno() {
            this.instanciaPruebaUno.Realizar();
        }
    }
    ventana4.PruebaDos = PruebaDos;
})(ventana4 || (ventana4 = {}));
const pruebaUno = new prueba4_1.ventana3.pruebaUno("Prueba 3");
const PruebaDos = new ventana4.PruebaDos(pruebaUno);
PruebaDos.llamarFuncionPruebaUno();
//# sourceMappingURL=prueba4-2.js.map