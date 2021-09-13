var CuentaPersonal = /** @class */ (function () {
    function CuentaPersonal(monto) {
        this.Saldo = 0;
        this.Saldo = monto;
    }
    CuentaPersonal.prototype.Deposito = function (monto) {
        this.Saldo += monto;
        console.log("Deposito de: " + monto);
        this.ConsultarSaldo();
    };
    CuentaPersonal.prototype.Retiro = function (monto) {
        this.Saldo -= monto;
        console.log("Retiro de: " + monto);
        this.ConsultarSaldo();
    };
    CuentaPersonal.prototype.ConsultarSaldo = function () {
        console.log("Saldo: " + this.Saldo);
    };
    return CuentaPersonal;
}());
var CuentaEmpresarial = /** @class */ (function () {
    function CuentaEmpresarial(monto) {
        this.Saldo = 0;
        this.Saldo = monto;
    }
    CuentaEmpresarial.prototype.Deposito = function (monto) {
        this.Saldo += monto;
        console.log("Deposito de: " + monto);
        this.ConsultarSaldo();
    };
    CuentaEmpresarial.prototype.Retiro = function (monto) {
        this.Saldo -= monto;
        console.log("Retiro de: " + monto);
        this.ConsultarSaldo();
    };
    CuentaEmpresarial.prototype.ConsultarSaldo = function () {
        console.log("Saldo: " + this.Saldo);
    };
    return CuentaEmpresarial;
}());
var TarjetaDeCredito = /** @class */ (function () {
    function TarjetaDeCredito() {
        this.Saldo = 0;
    }
    TarjetaDeCredito.prototype.Deposito = function (monto) {
        this.Saldo += monto;
        console.log("Deposito de: " + monto);
        this.ConsultarSaldo();
    };
    TarjetaDeCredito.prototype.Retiro = function (monto) {
        this.Saldo -= monto;
        console.log("Retiro de: " + monto);
        this.ConsultarSaldo();
    };
    TarjetaDeCredito.prototype.ConsultarSaldo = function () {
        console.log("Saldo: " + this.Saldo);
    };
    TarjetaDeCredito.prototype.CalculaIntereses = function () {
        return this.Saldo * .5;
    };
    return TarjetaDeCredito;
}());
var cuenta1 = new CuentaPersonal(1000);
var cuenta2 = new CuentaEmpresarial(50000);
var cuenta3 = new TarjetaDeCredito();
console.log("Cuenta personal:");
cuenta1.ConsultarSaldo();
cuenta1.Deposito(500);
cuenta1.Retiro(1000);
console.log("Cuenta empresarial:");
cuenta2.ConsultarSaldo();
cuenta2.Deposito(5000);
cuenta2.Retiro(10000);
console.log("Tarjeta de credito:");
cuenta3.ConsultarSaldo();
cuenta3.Retiro(1000);
cuenta3.Deposito(500);
console.log(cuenta3.CalculaIntereses());
