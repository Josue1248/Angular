//definir operacion depocito, retiro y consultar saldo
//crear las clases cuenta personal y cuenta empresarial relacionadas con ICuenta
interface ICuenta {
    Saldo:number;
    Deposito(monto:number):void;
    Retiro(monto:number):void;
    ConsultarSaldo():void;
}

class CuentaPersonal implements ICuenta {
    Saldo = 0;
    constructor (monto:number){
        this.Saldo = monto;
    }
    
    Deposito(monto:number){
        this.Saldo += monto;
        console.log("Deposito de: " + monto);
        this.ConsultarSaldo()
    }

    Retiro(monto:number){
        this.Saldo -= monto;
        console.log("Retiro de: " + monto);
        this.ConsultarSaldo()
    }

    ConsultarSaldo(){
        console.log("Saldo: " + this.Saldo);
    }
}

class CuentaEmpresarial implements ICuenta {
    Saldo = 0;
    constructor (monto:number){
        this.Saldo = monto;
    }

    Deposito(monto:number){
        this.Saldo += monto;
        console.log("Deposito de: " + monto);
        this.ConsultarSaldo()
    }

    Retiro(monto:number){
        this.Saldo -= monto;
        console.log("Retiro de: " + monto);
        this.ConsultarSaldo()
    }

    ConsultarSaldo(){
        console.log("Saldo: " + this.Saldo);
    }
}

interface ICuentaDeCredito extends ICuenta {
    CalculaIntereses():number;
}

class TarjetaDeCredito implements ICuentaDeCredito {
    Saldo:number = 0;

    Deposito(monto:number){
        this.Saldo += monto;
        console.log("Deposito de: " + monto);
        this.ConsultarSaldo()
    }

    Retiro(monto:number){
        this.Saldo -= monto;
        console.log("Retiro de: " + monto);
        this.ConsultarSaldo()
    }

    ConsultarSaldo(){
        console.log("Saldo: " + this.Saldo);
    }

    CalculaIntereses(){
        return this.Saldo * .5;
    }
}

let cuenta1:ICuenta = new CuentaPersonal(1000);
let cuenta2:ICuenta = new CuentaEmpresarial(50000);
let cuenta3:ICuentaDeCredito = new TarjetaDeCredito();

console.log("Cuenta personal:")
cuenta1.ConsultarSaldo();
cuenta1.Deposito(500);
cuenta1.Retiro(1000);

console.log("Cuenta empresarial:")
cuenta2.ConsultarSaldo();
cuenta2.Deposito(5000);
cuenta2.Retiro(10000);

console.log("Tarjeta de credito:")
cuenta3.ConsultarSaldo();
cuenta3.Retiro(1000);
cuenta3.Deposito(500);
console.log("Intereses de la cuenta: " + cuenta3.CalculaIntereses());