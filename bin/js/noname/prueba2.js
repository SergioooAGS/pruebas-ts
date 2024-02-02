"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _prueba1_1 = require(".prueba1");
var Ventana2;
(function (Ventana2) {
    class Prueba2 {
        constructor(instanciaPrueba1) {
            this.instanciaPrueba1 = instanciaPrueba1;
        }
        llamarFuncionPrueba1() {
            this.instanciaPrueba1.realizarAccion();
        }
    }
    Ventana2.Prueba2 = Prueba2;
})(Ventana2 || (Ventana2 = {}));
// Uso en algún lugar de tu aplicación
const prueba1 = new _prueba1_1.Ventana1.Prueba1("Hola desde Prueba1");
const prueba2 = new Ventana2.Prueba2(prueba1);
prueba2.llamarFuncionPrueba1();
//# sourceMappingURL=prueba2.js.map