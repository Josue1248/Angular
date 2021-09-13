var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myBoolean = true;
var myNumbre = 1234;
var myStringArray = ["First", "Second", "Third"];
var flag = false;
var dato = 'dato cadena';
console.log(dato);
dato = 1000;
console.log(dato);
dato = true;
console.log(dato);
var prueba = "Turtle";
var Brands;
(function (Brands) {
    Brands[Brands["Chevrolet"] = 0] = "Chevrolet";
    Brands[Brands["Cadillac"] = 1] = "Cadillac";
    Brands[Brands["Ford"] = 2] = "Ford";
    Brands[Brands["Buick"] = 3] = "Buick";
    Brands[Brands["Chrysler"] = 4] = "Chrysler";
    Brands[Brands["Dodge"] = 5] = "Dodge";
})(Brands || (Brands = {}));
var carro = Brands.Ford;
function SaludaAlUsuario() {
    console.log('Hola usuario');
}
var marca = "Bachoco";
//function SumaDeNumeros(num1:number[], num2?:number):number;
function SumaDeNumeros(num1, num2) {
    if (Array.isArray(num1)) {
        return num1;
    }
    else {
        return num1;
    }
}
var Persona = /** @class */ (function () {
    function Persona(n, ap, am, mayorDeEdad) {
        this.mayorDeEdad = mayorDeEdad;
        this.nombre = '';
        this.apellidoPaterno = '';
        this.apellidoMaterno = '';
        this.nombre = n;
        this.apellidoPaterno = ap;
        this.apellidoMaterno = am;
    }
    Persona.prototype.getINE = function () {
        return this.mayorDeEdad ? "Puede tramitar el INE" : "No puede asignarle INE";
    };
    return Persona;
}());
var Rectangulo = /** @class */ (function () {
    function Rectangulo() {
        this.base = 0;
        this.altura = 0;
        this.color = "Rojo";
    }
    Rectangulo.prototype.calculaArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
var Triangulo = /** @class */ (function () {
    function Triangulo() {
        this.base = 0;
        this.altura = 0;
        this.color = "Verde";
    }
    Triangulo.prototype.calculaArea = function () {
        return (this.base * this.altura) / 2;
    };
    return Triangulo;
}());
var TrianguloIsosceles = /** @class */ (function (_super) {
    __extends(TrianguloIsosceles, _super);
    function TrianguloIsosceles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TrianguloIsosceles;
}(Triangulo));
var TrianguloEscaleno = /** @class */ (function (_super) {
    __extends(TrianguloEscaleno, _super);
    function TrianguloEscaleno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TrianguloEscaleno;
}(Triangulo));
var Circulo = /** @class */ (function () {
    function Circulo() {
        this.color = "Azul";
        this.diametro = 10;
    }
    Circulo.prototype.calculaArea = function () {
        return Math.PI * Math.pow(this.diametro / 2, 2);
    };
    return Circulo;
}());
var miTriangulo = new TrianguloEscaleno();
miTriangulo.color = "Verde";
miTriangulo.calculaArea();
