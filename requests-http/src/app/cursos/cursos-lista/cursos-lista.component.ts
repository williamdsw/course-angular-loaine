import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CursosService } from '../cursos.service';

import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  // anotacao ($dollar) para Observable
  cursos$: Observable<Curso[]>;

  constructor(private cursoService: CursosService) { }

  ngOnInit() {
    this.cursos$ = this.cursoService.list ();
  }

}
