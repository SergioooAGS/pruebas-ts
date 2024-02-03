namespace Miagencia1{
      
    export class carros1{ // clases 
        private marcaCarro: string; //variable

        constructor(marcaCarro: string){ //constructor
            this.marcaCarro = marcaCarro;   
        }
        
        realiza(): void{
            console.log(`La marca de carros y datos es: ${this.marcaCarro}`)
            
            
        }       
    }
}
export {Miagencia1}

//poo con la 5