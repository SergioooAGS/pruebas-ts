namespace TiendaMov{
  export class Celulares {
      private Marca: string;
      private Stock: number;

      constructor(Marca: string, Stock: number) {
          this.Marca = Marca;
          this.Stock = Stock;
      }

      VerTelefonos() {
          console.log(`${this.Marca}, Piezas restantes: ${this.Stock}`);
      }
  }
}
export{TiendaMov}


