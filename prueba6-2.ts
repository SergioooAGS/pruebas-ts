namespace TiendaMov{
 export class Celulares{
    private NumPiece: number;
    private Marca: string;
//    public Gygas: boolean;

    constructor(Marca: string, NumPiece: number){
      this.Marca=Marca;
      this.NumPiece=NumPiece;
    }
    VerTelefonos(){
        console.log(`${this.Marca} ${this.NumPiece}`)

    }
}
}
export {TiendaMov}