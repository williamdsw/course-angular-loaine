import { Component, OnInit } from '@angular/core';

import { CursosService } from './../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  // FIELDS

  cursos: string[] = [];

  // CONSTRUCTOR

  constructor(private cursosService: CursosService) { }

  // LIFE CYCLE HOOKS

  ngOnInit() {
    this.cursos = this.cursosService.getCursos ();
  }

  // HELPER FUNCTIONS

  onAddCurso(curso: string) {
    this.cursosService.addCurso (curso);
  }

}
