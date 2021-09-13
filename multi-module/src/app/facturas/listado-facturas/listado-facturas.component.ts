import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura';
import { FacturasService } from '../facturas.service';

@Component({
  selector: 'app-listado-facturas',
  templateUrl: './listado-facturas.component.html',
  styleUrls: ['./listado-facturas.component.css']
})
export class ListadoFacturasComponent implements OnInit {

  facturas=[]
  factura:any = {};

  constructor(private fs:FacturasService) { }

  ngOnInit(): void {
    this.facturas = this.fs.GetFacturas();
  }

  AgregarFactura(){
    this.fs.AgregarFactura(this.factura);
  }

  BuscarFactura(){
    this.factura = this.fs.BuscarFactura(this.factura.id);
  }
}
