"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prueba5_2_1 = require("./prueba5-2");
var Miagencia2;
(function (Miagencia2) {
    class carros2 {
        constructor(instanciaCarro) {
            this.instanciaCarro = instanciaCarro;
        }
        LlamaMarca() {
            this.instanciaCarro.realiza();
            let miarray = ["Toyota", "Yaris", "4 Cilindros", "Color Rojo", "Version normal"];
            console.log("contenido del array miarray:");
            miarray.forEach(item => {
                console.log(item);
                for (let miarray = 1; miarray <= 100; miarray++) {
                    console.log(miarray);
                }
                ;
            });
        }
    }
    Miagencia2.carros2 = carros2;
})(Miagencia2 || (Miagencia2 = {}));
const carros1 = new prueba5_2_1.Miagencia1.carros1("tesla");
const carros2 = new Miagencia2.carros2(carros1);
carros2.LlamaMarca();
//# sourceMappingURL=prueba5.js.map