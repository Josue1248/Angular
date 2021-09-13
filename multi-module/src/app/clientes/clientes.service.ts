import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getClientes():Cliente[]{
    return [
      { name: 'cliente1', email: 'cliente1@emai.com' },
      { name: 'cliente2', email: 'cliente2@emai.com' },
      { name: 'cliente3', email: 'cliente3@emai.com' }
    ]
  }
}
