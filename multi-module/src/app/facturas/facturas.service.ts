import { Injectable } from '@angular/core';
import { Factura } from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {
  facturas:Factura[] = [
    { id: 1, fecha: '8/9/2021', cliente: 1,monto: 11000 },
    { id: 2, fecha: '7/9/2021', cliente: 3,monto: 1000 },
    { id: 3, fecha: '4/9/2021', cliente: 2,monto: 2380 }
  ]
  constructor() { }

  AgregarFactura(f:Factura){
    this.facturas.push(f);
  }

  GetFacturas(){
    return this.facturas;
  }

  BuscarFactura(id:number):Factura[]{
    let factura;
    this.facturas.forEach(element => {
      if(element.id==id) {factura = element}
    });
    return factura;
  }
}
