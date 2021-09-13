var myBoolean : boolean = true;
var myNumbre : number = 1234;
var myStringArray : string[] = ["First", "Second", "Third"];
let flag : boolean = false;
let dato : any = 'dato cadena';
console.log(dato);
dato = 1000;
console.log(dato);
dato = true;
console.log(dato);
type Animal = 'Cheetah' | 'Lion' | 'Turtle';
const prueba : Animal = "Turtle";

enum Brands {Chevrolet, Cadillac, Ford, Buick, Chrysler, Dodge}
let carro : Brands = Brands.Ford;

function SaludaAlUsuario() : void {
    console.log('Hola usuario');
}
let marca = "Bachoco";

function SumaDeNumeros(num1:number, num2?:number):number;
//function SumaDeNumeros(num1:number[], num2?:number):number;
function SumaDeNumeros(num1:number, num2?:number):number{
    if (Array.isArray(num1)){
        return num1
    } else {
        return num1
    }
}

class Persona {
    private nombre:string = '';
    private apellidoPaterno:string = '';
    private apellidoMaterno:string = '';

    constructor (n:string, ap:string, am:string, private mayorDeEdad:boolean){
        this.nombre = n;
        this.apellidoPaterno = ap;
        this.apellidoMaterno = am;
    }

    getINE(){
        return this.mayorDeEdad ? "Puede tramitar el INE" : "No puede asignarle INE"
    }
}

interface FiguraGeometrica{
    color:string;
    diametro?:number;
    calculaArea():number;
}

class Rectangulo implements FiguraGeometrica {
    private base:number = 0;
    private altura:number = 0;
    color:string = "Rojo";
    calculaArea(){
        return this.base * this.altura;
    }
}

class Triangulo implements FiguraGeometrica {
    private base:number = 0;
    private altura:number = 0;
    color:string = "Verde";
    calculaArea(){
        return (this.base * this.altura)/2;
    }
}

class TrianguloIsosceles extends Triangulo {

}

class TrianguloEscaleno extends Triangulo{

}

class Circulo implements FiguraGeometrica {
    color:string = "Azul";
    diametro:number = 10;
    calculaArea(){
        return Math.PI * Math.pow(this.diametro/2,2)
    }
}

let miTriangulo:FiguraGeometrica = new TrianguloEscaleno();
miTriangulo.color = "Verde";
miTriangulo.calculaArea();