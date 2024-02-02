namespace ventana3{
    export class pruebaUno {
          mensaje: string; 
        constructor(mensaje: string){
            this.mensaje = mensaje;
        }
        Realizar(): void{
            console.log(`realiza un mnsj: ${this.mensaje}`);
        }
    }
}
export {ventana3}

