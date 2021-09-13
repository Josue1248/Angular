import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service'
import { FacturasService } from '../../facturas/facturas.service'


@Component({
	selector: 'app-listado-clientes',
	templateUrl: './listado-clientes.component.html',
	styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {
	constructor(private cs:ClientesService, ) {}

	clientes=[]

	ngOnInit(): void {
		this.clientes = this.cs.getClientes();
	}

}
