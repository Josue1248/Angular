import { Injectable } from '@angular/core';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  addNote(){

  }
  getNotes():Note[]{
    return [{id: 1, title: "Nota 1", content: "Contenido"}, {id: 2, title: "Nota 2", content: "Contenido"}, {id: 3, title: "Nota 3", content: "Contenido"}];
  }
  updateNote(){

  }
  deleteNote(){

  }
}
