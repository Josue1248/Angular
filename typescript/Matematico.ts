//agregar las funciones aritmeticas suma, resta, multiplica y divide tipadas (parametros y tipo de retorno)
//agregar la funcion MayorDeDosNumeros en formato arrow
//Agregar la funcion AgregaUsuario que reciba el nombre y el rol:
//el rol puede ser Role.Admin o Role.User o Role.SuperUser

function Suma(numero1:number, numero2:number):number{
    return numero1 + numero2;
}

function Resta(numero1:number, numero2:number):number{
    return numero1 - numero2;
}

function Multiplicacion(numero1:number, numero2:number):number{
    return numero1 * numero2;
}

function Division(numero1:number, numero2:number):number{
    return numero1 / numero2;
}

const MayorDeDosNumeros = (numero1:number, numero2:number) => {
    if (numero1 > numero2){
        return numero1
    } else if(numero1 < numero2){
        return numero2
    }
}

enum Role {'Admin', 'User', 'SuperUser'};

type Department = 'Documentacion' | 'Finanzas' | 'RRHH';

function AgregarUsuario( numbre:string, rol:Role, depto: Department):void{
    console.log('Usuario agregado')
}

AgregarUsuario("Ivan", Role.Admin, "Finanzas")