import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html'
})
export class CursosComponent implements OnInit {

  // FIELDS

  public cursos: string[] = [];

  // CONSTRUCTOR

  constructor(private cursosService: CursosService) {}

  // LIFE CYCLE HOOKS

  ngOnInit() {
    this.cursos = this.cursosService.getCursos ();
    /*this.cursosService.emitirCursoCriado.subscribe (
      curso => { console.log (curso); },
    );*/
    CursosService.criouNovoCurso.subscribe (
      // curso => this.cursos.push (curso)
      curso => console.log (curso)
    );
  }

}
