import { TiendaMov } from "./prueba6-2";
namespace TiendaMov2{
    export class Celulares2{
        private instanciaCel: TiendaMov.Celulares;
        private instanciaPiece:TiendaMov.Celulares number[];

        constructor(instanciaCel: TiendaMov.Celulares, instanciaPiece: number[]) {  //No olvidar la parte de los Corchetes al usar un tipo de dato number 
            this.instanciaCel=instanciaCel;
            this.instanciaPiece = instanciaPiece;
        }
        VerCel() {
            this.instanciaCel.VerTelefonos();
            
        }
    }
}
let Celu: string[] = ["Xiaomi Pad 6 SE", "Funda de regalo" , "Piezas disponibles:  "];

let Pieces: number[] = [56, 67];


const Celulares = new TiendaMov.Celulares("Marca de celular", 10); // Correcto

const Celulares2 = new TiendaMov2.Celulares2(Celulares, Pieces);
Celulares2.VerCel();

