"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prueba1_1 = require("./prueba1");
var Ventana2;
(function (Ventana2) {
    var Prueba2 = /** @class */ (function () {
        function Prueba2(instanciaPrueba1) {
            this.instanciaPrueba1 = instanciaPrueba1;
        }
        Prueba2.prototype.llamarFuncionPrueba1 = function () {
            this.instanciaPrueba1.realizarAccion();
        };
        return Prueba2;
    }());
    Ventana2.Prueba2 = Prueba2;
})(Ventana2 || (Ventana2 = {}));
// Uso en algún lugar de tu aplicación
var prueba1 = new prueba1_1.Ventana1.Prueba1("Hola desde Prueba1");
var prueba2 = new Ventana2.Prueba2(prueba1);
prueba2.llamarFuncionPrueba1();
