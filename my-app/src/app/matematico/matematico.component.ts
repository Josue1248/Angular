import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matematico',
  templateUrl: './matematico.component.html',
  styleUrls: ['./matematico.component.css']
})
export class MatematicoComponent implements OnInit {

  numero1:number;
  numero2:number;
  operaciones:string[];
  resultado:number;

  constructor() { }

  ngOnInit(): void {
  }

  calcularOperacion(){

  }

}
