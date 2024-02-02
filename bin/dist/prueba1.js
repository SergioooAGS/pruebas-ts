"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ventana1 = void 0;
var Ventana1;
(function (Ventana1) {
    var Prueba1 = /** @class */ (function () {
        function Prueba1(mensaje) {
            this.mensaje = mensaje;
        }
        Prueba1.prototype.realizarAccion = function () {
            console.log("Realizando acci\u00F3n desde Prueba1: ".concat(this.mensaje));
        };
        return Prueba1;
    }());
    Ventana1.Prueba1 = Prueba1;
})(Ventana1 || (exports.Ventana1 = Ventana1 = {}));
