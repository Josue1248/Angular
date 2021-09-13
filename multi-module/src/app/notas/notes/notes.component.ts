import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private notesService:NotesService) { }

  notes:Note[]=[];

  ngOnInit(): void {
    this.notes = this.notesService.getNotes()
  }

}
