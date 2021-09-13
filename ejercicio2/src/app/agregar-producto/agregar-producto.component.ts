import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-agregar-producto',
	templateUrl: './agregar-producto.component.html',
	styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
	producto:any = {};
  @Output() productsEvent = new EventEmitter<string>();
	constructor() {

	 }

	ngOnInit(): void {
	}

  Guardar(){
    this.productsEvent.emit(this.producto);
    this.producto ={};
  }

}
