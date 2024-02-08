import { TiendaMov } from "./prueba6-2"
namespace TiendaMov2 {
    export class Celulares2 {
        private instanciaCel: TiendaMov.Celulares;

        constructor(instanciaCel: TiendaMov.Celulares) {
            this.instanciaCel = instanciaCel;
        }

        VerCel() {
            this.instanciaCel.VerTelefonos();
        }
    }
}

let Celu: string[] = ["Xiaomi"];
const Stock = 10; 

const Celulares = new TiendaMov.Celulares(`Es ${Celu}`, Stock);
const Celulares2 = new TiendaMov2.Celulares2(Celulares);
Celulares2.VerCel();

