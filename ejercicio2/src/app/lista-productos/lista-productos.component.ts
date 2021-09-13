import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-lista-productos',
	templateUrl: './lista-productos.component.html',
	styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
	productos:any[];
  total:number;

	constructor() {
		this.productos = [];
    this.total = 0;
	}

	ngOnInit(): void {
	}
	receiveMessage($event) {
		this.productos.push($event);
    this.total += parseFloat($event.precio);
	}
}
