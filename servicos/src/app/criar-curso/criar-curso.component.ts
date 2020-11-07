import { Component, OnInit } from '@angular/core';

import { CursosService } from './../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html'
})
export class CriarCursoComponent implements OnInit {

  // FIELDS

  public cursos: string[] = [];

  // CONSTRUCTOR

  constructor(private cursosService: CursosService) { }

  // LIFE CYCLE HOOKS

  ngOnInit() {
    this.cursos = this.cursosService.getCursos ();
  }

  // HELPER FUNCTIONS

  public onAddCurso(curso: string): void {
    this.cursosService.addCurso (curso);
  }

}
