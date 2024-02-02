import { Miagencia1 } from "./prueba5-2"
namespace Miagencia2{
    export class carros2{
        private instanciaCarro: Miagencia1.carros1;
        constructor(instanciaCarro: Miagencia1.carros1){
            this.instanciaCarro = instanciaCarro;        }
        LlamaMarca(): void {
            this.instanciaCarro.realiza();
            let miarray: string[] = ["Toyota", "Yaris", "4 Cilindros", "Color Rojo", "Version normal"];
            console.log("contenido del array miarray:");
            miarray.forEach(item =>{
                console.log(item);
             for(let miarray = 1; miarray <= 100; miarray ++){
                 console.log(miarray);
             };
            });
        }
    }

}
const carros1 = new Miagencia1.carros1("tesla");
const carros2 = new Miagencia2.carros2(carros1);
carros2.LlamaMarca();
