import { ventana3 } from './prueba4';
namespace ventana4{
 export class PruebaDos{
    private instanciaPruebaUno: ventana3.pruebaUno;
    
    constructor(instanciaPruebaUno: ventana3.pruebaUno){
        this.instanciaPruebaUno = instanciaPruebaUno;
    }
    llamarFuncionPruebaUno(): void{
        this.instanciaPruebaUno.Realizar();
    }
 }
}
const pruebaUno = new ventana3.pruebaUno("Prueba 3");
const PruebaDos = new ventana4.PruebaDos(pruebaUno    );
PruebaDos.llamarFuncionPruebaUno();